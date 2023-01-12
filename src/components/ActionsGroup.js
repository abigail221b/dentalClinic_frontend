import NewAppointmentForm from "../pages/NewAppointmentForm";

import { BsPersonLinesFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";
import { Flex, Tooltip, IconButton } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function ActionsGroup({ patient }) {

    const { isOpen, onOpen, onClose } = useDisclosure();
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
                <IconButton onClick={onOpen} size="md" icon={<IoMdAdd />} />
            </Tooltip>
            <NewAppointmentForm isOpen={isOpen} onClose={onClose} patient={patient} />

            <Tooltip label="Patient Details">
                <IconButton onClick={navigateToPatientDetails} size="md" icon={<BsPersonLinesFill />} />
            </Tooltip>

            <Tooltip label="Delete patient">
                <IconButton size="md" colorScheme="red" icon={<RiDeleteBinFill />} />
            </Tooltip>
        </Flex>
    );
}

export default ActionsGroup;