import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, HStack, } from '@chakra-ui/react'
import { Button, Text } from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";

function DeletePrompt({ isOpen, onClose, message, endpoint }) {

    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(endpoint, { method: "DELETE" })
        .then(res => {
            if(res.status === 200)
                navigate("/");
        });
    }

    return (
        <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                    <Text>{ message }</Text>
                </ModalBody>
                <ModalFooter>
                    <HStack>
                        <Button onClick={handleDelete} colorScheme="red" width="100px">Delete</Button>
                        <Button onClick={onClose} width="100px">Cancel</Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default DeletePrompt;