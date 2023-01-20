import UpdateAppointmentForm from "../pages/UpdateAppointmentForm";
import DeletePrompt from "./DeletePrompt";

import { Flex, Tooltip, IconButton, useDisclosure } from "@chakra-ui/react";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBinFill } from "react-icons/ri";

function AppointmentActionsGroup({ appointment }) {

    const { isOpen: updateAppointmentIsOpen,
            onOpen: updateAppointmentOnOpen,
            onClose: updateAppointmentOnClose } = useDisclosure();

    const { isOpen: deletePromptIsOpen,
            onOpen: deletePromptOnOpen,
            onClose: deletePromptOnClose } = useDisclosure();

    return (
        <Flex gap="5">
            <Tooltip label="Update Appointment">
                <IconButton onClick={updateAppointmentOnOpen} size="md" icon={<RiEdit2Fill />} />
            </Tooltip>
            <UpdateAppointmentForm
                isOpen={updateAppointmentIsOpen}
                onClose={updateAppointmentOnClose}
                appointment={appointment} />

            <Tooltip label="Delete Appointment">
                <IconButton onClick={deletePromptOnOpen} colorScheme="red" size="md" icon={<RiDeleteBinFill />} />
            </Tooltip>
            <DeletePrompt
                isOpen={deletePromptIsOpen}
                onClose={deletePromptOnClose}
                message={"Are you sure you want to cancel this appointment?"}
                endpoint={`http://${process.env.REACT_APP_BACKEND_HOST}:8080/appointments/${appointment.id}`} />
        </Flex>
    );
}

export default AppointmentActionsGroup;