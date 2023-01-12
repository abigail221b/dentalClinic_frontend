import { Flex, Tooltip, IconButton } from "@chakra-ui/react";
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBinFill } from "react-icons/ri";

function AppointmentActionsGroup() {
    return (
        <Flex gap="5">
            <Tooltip label="Update Appointment">
                <IconButton size="md" icon={<RiEdit2Fill />} />
            </Tooltip>

            <Tooltip label="Delete Appointment">
                <IconButton size="md" icon={<RiDeleteBinFill />} />
            </Tooltip>
        </Flex>
    );
}

export default AppointmentActionsGroup;