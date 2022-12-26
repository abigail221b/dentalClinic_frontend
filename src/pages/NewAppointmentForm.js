import { Flex, Heading } from "@chakra-ui/layout";
import {
    FormControl,
    FormLabel,
    Input,
    RadioGroup,
    HStack,
    Radio
  } from '@chakra-ui/react';
  import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

function NewAppointmentForm() {
    return (
        <Flex flexDirection="column" width="100%" height="100vh">
            <Heading>New Appointment for __________</Heading>

            <FormControl>
                <FormLabel>Doctor</FormLabel>
                <RadioGroup defaultValue="Doctor 1">
                    <HStack spacing="24px">
                    <Radio value="Doctor 1">Doc 1</Radio>
                    <Radio value="Doctor 2">Doc 2</Radio>
                    <Radio value="Doctor 3">Doc 3</Radio>
                    <Radio value="Doctor 4">Doc 4</Radio>
                    </HStack>
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
        </Flex>
    );
}

export default NewAppointmentForm;