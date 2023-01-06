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
    const [formError, setFormError] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/dentists")
            .then(res => res.json())
            .then(dentists => setDentists(dentists));
    }, []);

    const handleSubmit = () => {
        if(selectedDentist === null || date === null || time === null || duration === "") {
            setFormError(true);
            return;
        }

    }

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
                        <FormControl isInvalid={formError && selectedDentist === null}>
                            <FormLabel>Select a Dentist</FormLabel>
                            <RadioGroup onChange={setSelectedDentist}>
                                <Flex justifyContent="space-between" wrap="wrap" paddingBottom="20px">
                                {dentists.map(dentist => <Radio value={`${dentist.id}`}>{`Dr. ${dentist.firstName} ${dentist.lastName}`}</Radio>)}
                                </Flex>
                            </RadioGroup>
                        </FormControl>

                        <Flex gap="6">
                            <FormControl isInvalid={formError && date === null}>
                                <FormLabel>Date</FormLabel>
                                <Input type="date" onChange={(e) => setDate(e.target.value)}/>
                            </FormControl>

                            <FormControl isInvalid={formError && time === null}>
                                <FormLabel>Time</FormLabel>
                                <Input type="time" onChange={(e) => setTime(e.target.value)}/>
                            </FormControl>

                            <FormControl isInvalid={formError && duration === ""}>
                                <FormLabel>Duration</FormLabel>
                                <NumberInput defaultValue={duration} min={15} max={120} step={15} onChange={setDuration}>
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
                        <Button onClick={handleSubmit}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default NewAppointmentForm;