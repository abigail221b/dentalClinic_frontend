import { BsPersonLinesFill } from "react-icons/bs";
import { RiDeleteBinFill } from "react-icons/ri";
import { Flex, Tooltip, IconButton } from "@chakra-ui/react";

function DentistActionsGroup({ dentist }) {
    return (
        <Flex gap="5">
            <Tooltip label="Dentist Details">
                <IconButton  size="md" icon={<BsPersonLinesFill />} />
            </Tooltip>
            
            <Tooltip label="Delete Dentist">
                <IconButton size="md" icon={<RiDeleteBinFill />} />
            </Tooltip>
        </Flex>
    );
}

export default DentistActionsGroup;