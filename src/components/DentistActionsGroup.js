import { BsPersonLinesFill } from "react-icons/bs";
import { RiDeleteBinFill } from "react-icons/ri";
import { Flex, Tooltip, IconButton, useDisclosure } from "@chakra-ui/react";
import UpdateDentistForm from "../pages/UpdateDentistForm";

function DentistActionsGroup({ dentist }) {

    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <Flex gap="5">
            <Tooltip label="Dentist Details">
                <IconButton onClick={onOpen} size="md" icon={<BsPersonLinesFill />} />
            </Tooltip>
            <UpdateDentistForm isOpen={isOpen} onClose={onClose} dentist={dentist} />
            
            <Tooltip label="Delete Dentist">
                <IconButton size="md" icon={<RiDeleteBinFill />} />
            </Tooltip>
        </Flex>
    );
}

export default DentistActionsGroup;