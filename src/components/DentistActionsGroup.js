import { RiEdit2Fill, RiDeleteBinFill } from "react-icons/ri";
import { Flex, Tooltip, IconButton, useDisclosure } from "@chakra-ui/react";
import UpdateDentistForm from "../pages/UpdateDentistForm";

function DentistActionsGroup({ dentist, setDentist }) {

    const {isOpen, onOpen, onClose} = useDisclosure();

    const handleDelete = () => {
        fetch(`http://localhost:8080/dentists/${dentist.id}`, { method: "DELETE" });
    }

    return (
        <Flex gap="5">
            <Tooltip label="Update Dentist">
                <IconButton onClick={onOpen} size="md" icon={<RiEdit2Fill />} />
            </Tooltip>
            <UpdateDentistForm isOpen={isOpen} onClose={onClose} dentist={dentist} setDentist={setDentist} />
            
            <Tooltip label="Delete Dentist">
                <IconButton onClick={handleDelete} size="md" icon={<RiDeleteBinFill />} />
            </Tooltip>
        </Flex>
    );
}

export default DentistActionsGroup;