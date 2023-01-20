import UpdateDentistForm from "../pages/UpdateDentistForm";
import DeletePrompt from "./DeletePrompt";

import { Flex, Tooltip, IconButton, useDisclosure } from "@chakra-ui/react";
import { RiEdit2Fill, RiDeleteBinFill } from "react-icons/ri";

function DentistActionsGroup({ dentist, setDentist }) {

    const { isOpen: updateDentistIsOpen,
            onOpen: updateDentistOnOpen,
            onClose: updateDentistOnClose } = useDisclosure();

    const { isOpen: deletePromptIsOpen,
            onOpen: deletePromptOnOpen,
            onClose: deletePromptOnClose } = useDisclosure();

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
                <IconButton onClick={deletePromptOnOpen} size="md" colorScheme="red" icon={<RiDeleteBinFill />} />
            </Tooltip>
            <DeletePrompt
                isOpen={deletePromptIsOpen}
                onClose={deletePromptOnClose}
                message={"Are you sure you want to delete this dentist?"}
                endpoint={`http://${process.env.REACT_APP_BACKEND_HOST}:8080/dentists/${dentist.id}`} />
        </Flex>
    );
}

export default DentistActionsGroup;