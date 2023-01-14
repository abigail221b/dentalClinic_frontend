import { Flex, Tooltip, IconButton, useDisclosure } from "@chakra-ui/react";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBinFill } from "react-icons/ri";
import UpdateAppointmentForm from "../pages/UpdateAppointmentForm";

function AppointmentActionsGroup({ appointment }) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex gap="5">
            <Tooltip label="Update Appointment">
                <IconButton onClick={onOpen} size="md" icon={<RiEdit2Fill />} />
            </Tooltip>
            <UpdateAppointmentForm isOpen={isOpen} onClose={onClose} appointment={appointment} />

            <Tooltip label="Delete Appointment">
                <IconButton colorScheme="red" size="md" icon={<RiDeleteBinFill />} />
            </Tooltip>
        </Flex>
    );
}

export default AppointmentActionsGroup;