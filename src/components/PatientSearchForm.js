import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useState } from "react";

function PatientSearchForm({ setPatients }) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <Box>
            <Heading size="md">Search Patients</Heading>
            <Flex flexDirection="column" gap="4">
                <Flex>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                            <Input type='text' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                            <Input type='text' />
                    </FormControl>
                </Flex>
                <Flex>
                    <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                            <Input type='tel' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Date of Birth</FormLabel>
                            <Input type='date' />
                    </FormControl>
                </Flex>
            </Flex>
            <Button width="100px">Search</Button>
        </Box>
        
    );
}

export default PatientSearchForm;