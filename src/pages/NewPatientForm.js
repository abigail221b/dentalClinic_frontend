import { Heading, Flex, FormControl, FormLabel, Input, HStack, Button, RadioGroup, Radio } from "@chakra-ui/react";
import { useState } from "react";

function NewPatientForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [sex, setSex] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" gap="3">
            <Heading>New Patient</Heading>
                <HStack>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" />
                    </FormControl>
                </HStack>
                <HStack>
                    <FormControl>
                        <FormLabel>Sex</FormLabel>
                        <RadioGroup>
                            <HStack>
                                <Radio value="M">M</Radio>
                                <Radio value="F">F</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Date of Birth</FormLabel>
                        <Input type="date" />
                    </FormControl>
                </HStack>
                <HStack>
                    <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                        <Input type="tel" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" />
                    </FormControl>
                </HStack>
                <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input type="text" />
                </FormControl>
                <Button width="100px">Submit</Button>
        </Flex>
    );
}

export default NewPatientForm;