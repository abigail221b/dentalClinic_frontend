import { Flex, FormControl, FormLabel, Input, HStack, RadioGroup, Radio, Heading, Button } from "@chakra-ui/react";
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

function UpdatePatientForm({ isOpen, onClose, patientData }) {

    const [patient, setPatient] = useState(patientData);

    const handleSubmit = () => {
        fetch(`http://localhost:8080/patients/${patient.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(patient)
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
                        <Input type="text" 
                                <Input type="text" 
                                    value={patient.firstName} 
                               value={patient.firstName} 
                                    value={patient.firstName} 
                                    onChange={e => setPatient({...patient, firstName: e.target.value})} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" 
                        <Input type="text" 
                                <Input type="text" 
                                    value={patient.lastName} 
                               value={patient.lastName} 
                                    value={patient.lastName} 
                                    onChange={e => setPatient({...patient, lastName: e.target.value})} />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl>
                                <FormLabel>Sex</FormLabel>
                                <RadioGroup value={patient.sex}
                                            onChange={value => setPatient({...patient, sex: value})}>
                                    <HStack>
                                        <Radio value="M">M</Radio>
                                        <Radio value="F">F</Radio>
                                    </HStack>
                                </RadioGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Date of Birth</FormLabel>
                                <Input type="date" 
                        <Input type="date" 
                                <Input type="date" 
                                    value={patient.dateOfBirth}
                                    onChange={e => setPatient({...patient, dateOfBirth: e.target.value})} />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl>
                                <FormLabel>Phone Number</FormLabel>
                                <Input type="tel" 
                        <Input type="tel" 
                                <Input type="tel" 
                                    value={patient.phoneNumber} 
                               value={patient.phoneNumber} 
                                    value={patient.phoneNumber} 
                                    onChange={e => setPatient({...patient, phoneNumber: e.target.value})} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" 
                        <Input type="email" 
                                <Input type="email" 
                                    value={patient.email} 
                               value={patient.email} 
                                    value={patient.email} 
                                    onChange={e => setPatient({...patient, email: e.target.value})} />
                            </FormControl>
                        </HStack>
                        <FormControl>
                            <FormLabel>Address</FormLabel>
                            <Input type="text" value={patient.address} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button width="100px" onClick={handleSubmit}>Update</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default UpdatePatientForm;