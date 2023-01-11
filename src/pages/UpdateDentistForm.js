import { Heading, Flex, FormControl, FormLabel, Input, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

function UpdateDentistForm({ isOpen, onClose, dentist }) {
    return (
        <>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Heading>Update Dentist</Heading>
                        <ModalCloseButton />
                    </ModalHeader>
                    <ModalBody>
                        <HStack>
                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" value={dentist.firstName} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" value={dentist.lastName} />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl>
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="tel" value={dentist.phoneNumber} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" value={dentist.email} />
                            </FormControl>
                        </HStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button width="100px">Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default UpdateDentistForm;