import { BsPersonLinesFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";
import { Flex, Tooltip, IconButton } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react'
import NewAppointmentForm from "../pages/NewAppointmentForm";

function ActionsGroup({ patient }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex gap="5">
            <Tooltip label="Book Appointment">
                <IconButton onClick={onOpen} size="md" icon={<IoMdAdd />} />
            </Tooltip>
            <NewAppointmentForm isOpen={isOpen} onClose={onClose} patient={patient}/>

            <Tooltip label="Patient Details">
                <IconButton  size="md" icon={<BsPersonLinesFill />} />
            </Tooltip>
            

            <Tooltip label="Delete patient">
                <IconButton size="md" icon={<RiDeleteBinFill />} />
            </Tooltip>
        </Flex>
    );
}

export default ActionsGroup;