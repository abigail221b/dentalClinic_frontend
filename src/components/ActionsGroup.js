import NewAppointmentForm from "../pages/NewAppointmentForm";
import DeletePrompt from "./DeletePrompt";

import { BsPersonLinesFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";
import { Flex, Tooltip, IconButton } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function ActionsGroup({ patient }) {

    const { isOpen: newAppointmentFormIsOpen,
            onOpen: newAppointmentFormOnOpen,
            onClose: newAppointmentFormOnClose } = useDisclosure();

    const { isOpen: deletePromptIsOpen,
            onOpen: deletePromptOnOpen,
            onClose: deletePromptOnClose } = useDisclosure();

    const navigate = useNavigate();

    const navigateToPatientDetails = () => {
        navigate(`/patients/${patient.id}`, {
            state: {
                patient: patient
            }
        });
    }

    return (
        <Flex gap="5">
            <Tooltip label="Book Appointment">
                <IconButton onClick={newAppointmentFormOnOpen} size="md" icon={<IoMdAdd />} />
            </Tooltip>
            <NewAppointmentForm
                isOpen={newAppointmentFormIsOpen}
                onClose={newAppointmentFormOnClose}
                patient={patient} />

            <Tooltip label="Patient Details">
                <IconButton onClick={navigateToPatientDetails} size="md" icon={<BsPersonLinesFill />} />
            </Tooltip>

            <Tooltip label="Delete patient">
                <IconButton onClick={deletePromptOnOpen} size="md" colorScheme="red" icon={<RiDeleteBinFill />} />
            </Tooltip>
            <DeletePrompt
                isOpen={deletePromptIsOpen}
                onClose={deletePromptOnClose}
                message={"Are you sure you want to delete this patient?"}
                endpoint={`http://${process.env.REACT_APP_BACKEND_HOST}:8080/patients/${patient.id}`} />
        </Flex>
    );
}

export default ActionsGroup;