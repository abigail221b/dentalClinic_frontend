import UpdateDentistForm from "../pages/UpdateDentistForm";

import { Flex, Tooltip, IconButton, useDisclosure } from "@chakra-ui/react";
import { RiEdit2Fill, RiDeleteBinFill } from "react-icons/ri";

function DentistActionsGroup({ dentist, setDentist }) {

    const { isOpen: updateDentistIsOpen,
            onOpen: updateDentistOnOpen,
            onClose: updateDentistOnClose } = useDisclosure();

    const handleDelete = () => {
        fetch(`http://${process.env.REACT_APP_BACKEND_HOST}:8080/dentists/${dentist.id}`, { method: "DELETE" });
    }

    return (
        <Flex gap="5">
            <Tooltip label="Update Dentist">
                <IconButton onClick={updateDentistOnOpen} size="md" icon={<RiEdit2Fill />} />
            </Tooltip>
            <UpdateDentistForm
                isOpen={updateDentistIsOpen}
                onClose={updateDentistOnClose}
                dentist={dentist}
                setDentist={setDentist} />

            <Tooltip label="Delete Dentist">
                <IconButton onClick={handleDelete} size="md" colorScheme="red" icon={<RiDeleteBinFill />} />
            </Tooltip>
        </Flex>
    );
}

export default DentistActionsGroup;