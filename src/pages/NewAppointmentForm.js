import { Flex, Heading } from "@chakra-ui/layout";
import {
    FormControl,
    FormLabel,
    Input,
    RadioGroup,
    Stack,
    Radio,
    Skeleton
} from '@chakra-ui/react';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react';
import { useEffect, useState } from "react";

function NewAppointmentForm({ isOpen, onClose, patient }) {

    const [dentists, setDentists] = useState([]);
    const [selectedDentist, setSelectedDentist] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [duration, setDuration] = useState(45);

    useEffect(() => {
        fetch("http://localhost:8080/dentists")
            .then(res => res.json())
            .then(dentists => setDentists(dentists));
    }, []);

    return (
        <>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Heading>{`New Appointment for ${patient.firstName} ${patient.lastName}`}</Heading>
                        <ModalCloseButton />
                    </ModalHeader>
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Select a Dentist</FormLabel>
                            <RadioGroup onChange={setSelectedDentist}>
                                <Flex justifyContent="space-between" wrap="wrap" paddingBottom="20px">
                                {dentists.map(dentist => <Radio value={`${dentist.id}`}>{`Dr. ${dentist.firstName} ${dentist.lastName}`}</Radio>)}
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
                        <Button>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default NewAppointmentForm;