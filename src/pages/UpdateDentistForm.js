import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { Heading, FormControl, FormLabel, Input, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";

function UpdateDentistForm({ isOpen, onClose, dentist: dentistRow, setDentist: setDentistRow }) {

    const [dentist, setDentist] = useState(dentistRow);

    const handleSubmit = () => {
        fetch(`http://localhost:8080/dentists/${dentist.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dentist)
        })
        .then(res => res.json())
        .then(dentist => {
            setDentistRow(dentist);
            onClose();
        });
    }

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
                                <Input type="text"
                                       value={dentist.firstName}
                                       onChange={e => setDentist({...dentist, firstName: e.target.value})} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text"
                                       value={dentist.lastName}
                                       onChange={e => setDentist({...dentist, lastName: e.target.value})} />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl>
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="tel"
                                       value={dentist.phoneNumber}
                                       onChange={e => setDentist({...dentist, phoneNumber: e.target.value})} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type="email"
                                       value={dentist.email}
                                       onChange={e => setDentist({...dentist, email: e.target.value})} />
                            </FormControl>
                        </HStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleSubmit} colorScheme="teal" width="100px">Update</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default UpdateDentistForm;