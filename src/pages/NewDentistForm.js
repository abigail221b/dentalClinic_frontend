import { Heading, Flex, FormControl, FormLabel, Input, HStack, Button, RadioGroup, Radio } from "@chakra-ui/react";
import { useState } from "react";

function NewDentistForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" gap="3">
            <Heading>New Dentist</Heading>
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
                        <FormLabel>Phone Number</FormLabel>
                        <Input type="tel" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" />
                    </FormControl>
                </HStack>
                <Button width="100px">Submit</Button>
        </Flex>
    );
}

export default NewDentistForm;