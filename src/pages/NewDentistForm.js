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
                        <Input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </FormControl>
                </HStack>
                <HStack>
                    <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                        <Input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </FormControl>
                </HStack>
                <Button width="100px">Submit</Button>
        </Flex>
    );
}

export default NewDentistForm;