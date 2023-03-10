import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { FormControl, FormLabel, Input, HStack, RadioGroup, Radio, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";

function UpdatePatientForm({ isOpen, onClose, patient, setPatient }) {

    const [updatePatient, setUpdatePatient] = useState(patient);

    const handleSubmit = () => {
        fetch(`http://${process.env.REACT_APP_BACKEND_HOST}:8080/patients/${patient.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatePatient)
        })
        .then(res => {
            if(res.status === 200) return res.json();
        })
        .then(patient => {
            setPatient(patient);
            onClose();
        });
    }

    return (
        <>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Heading>Update Patient Information</Heading>
                        <ModalCloseButton />
                    </ModalHeader>
                    <ModalBody>
                        <HStack>
                            <FormControl>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text"
                                    value={updatePatient.firstName}
                                    onChange={e => setUpdatePatient({...updatePatient, firstName: e.target.value})} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text"
                                    value={updatePatient.lastName}
                                    onChange={e => setUpdatePatient({...updatePatient, lastName: e.target.value})} />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl>
                                <FormLabel>Sex</FormLabel>
                                <RadioGroup value={updatePatient.sex}
                                            onChange={value => setUpdatePatient({...updatePatient, sex: value})}>
                                    <HStack>
                                        <Radio value="M">M</Radio>
                                        <Radio value="F">F</Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Date of Birth</FormLabel>
                                <Input type="date"
                                    value={updatePatient.dateOfBirth}
                                    onChange={e => setUpdatePatient({...updatePatient, dateOfBirth: e.target.value})} />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl>
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="tel"
                                    value={updatePatient.phoneNumber}
                                    onChange={e => setUpdatePatient({...updatePatient, phoneNumber: e.target.value})} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type="email"
                                    value={updatePatient.email}
                                    onChange={e => setUpdatePatient({...updatePatient, email: e.target.value})} />
                            </FormControl>
                        </HStack>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                            <Input type="text"
                                   value={updatePatient.address}
                                   onChange={e => setUpdatePatient({...updatePatient, address: e.target.value})} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="teal" width="100px" onClick={handleSubmit}>Update</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default UpdatePatientForm;