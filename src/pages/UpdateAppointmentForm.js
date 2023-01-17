import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { FormControl, FormLabel, Input, RadioGroup, Radio } from '@chakra-ui/react';
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function UpdateAppointmentForm({ isOpen, onClose, appointment: appointmentRow }) {

    const [appointment, setAppointment] = useState(appointmentRow);
    const [dentists, setDentists] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/dentists")
        .then(res => res.json())
        .then(dentists => setDentists(dentists));
    }, []);

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
                        <RadioGroup
                            value={appointment.dentist.id}
                            onChange={e => setAppointment({...appointment, dentist: { id: Number(e) }})}>

                            <Flex gap="5" wrap="wrap" paddingBottom="20px">
                                {dentists.map(dentist => <Radio value={dentist.id}>{`Dr. ${dentist.firstName} ${dentist.lastName}`}</Radio>)}
                            </Flex>
                        </RadioGroup>
                    </FormControl>
                    <Flex gap="6">
                        <FormControl>
                            <FormLabel>Date</FormLabel>
                            <Input
                                type="date"
                                value={appointment.date}
                                onChange={e => setAppointment({...appointment, date: e.target.value})} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Time</FormLabel>
                            <Input
                                type="time"
                                value={appointment.startTime}
                                onChange={e => setAppointment({...appointment, startTime: e.target.value})} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Duration</FormLabel>
                            <NumberInput
                                defaultValue={appointment.duration}
                                min={15} max={120} step={15}
                                onChange={e => setAppointment({...appointment, duration: e})}>

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