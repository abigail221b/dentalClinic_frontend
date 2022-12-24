import { BsPersonLinesFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";
import { Flex, Tooltip, IconButton } from "@chakra-ui/react";

function ActionsGroup() {
    return (
        <Flex gap="5">
            <Tooltip label="Book Appointment">
                <IconButton size="md" icon={<IoMdAdd />} />
            </Tooltip>

            <Tooltip label="Patient Details">
                <IconButton size="md" icon={<BsPersonLinesFill />} />
            </Tooltip>

            <Tooltip label="Delete patient">
                <IconButton size="md" icon={<RiDeleteBinFill />} />
            </Tooltip>
        </Flex>
    );
}

export default ActionsGroup;