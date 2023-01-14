import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { FormControl, FormLabel, Input, RadioGroup, Radio } from '@chakra-ui/react';
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

function UpdateAppointmentForm({ isOpen, onClose, appointment: appointmentRow }) {

    const [appointment, setAppointment] = useState(appointmentRow);

    return (
        <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Heading>Update Appointment</Heading>
                    <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                    <FormControl>
                        <FormLabel>Dentist</FormLabel>
                        <RadioGroup>
                            <Flex gap="5" wrap="wrap" paddingBottom="20px">
                                <Radio value="1">Dr. 1</Radio>
                                <Radio value="2">Dr. 2</Radio>
                            </Flex>
                        </RadioGroup>
                    </FormControl>
                    <Flex gap="6">
                        <FormControl>
                            <FormLabel>Date</FormLabel>
                            <Input type="date" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Time</FormLabel>
                            <Input type="time" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Duration</FormLabel>
                            <NumberInput defaultValue={45} min={15} max={120} step={15}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Button width="100px" colorScheme="teal">Submit</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default UpdateAppointmentForm;