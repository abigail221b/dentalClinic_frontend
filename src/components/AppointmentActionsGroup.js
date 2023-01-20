import UpdateAppointmentForm from "../pages/UpdateAppointmentForm";

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
                <IconButton colorScheme="red" size="md" icon={<RiDeleteBinFill />} />
            </Tooltip>
        </Flex>
    );
}

export default AppointmentActionsGroup;