import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react"
import { FormControl, FormLabel, Input, RadioGroup, Radio } from '@chakra-ui/react';
import { Flex, Heading, Text, Button } from "@chakra-ui/react";

function UpdateAppointmentForm() {
    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" backgroundColor="#F9F9F9">
            <Heading>Update Appointment</Heading>
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
            <Button width="100px">Submit</Button>
        </Flex>
    );
}

export default UpdateAppointmentForm;