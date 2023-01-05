import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useState } from "react";

function PatientSearchForm({ setPatients }) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = () => {
        let firstNameParam = firstName === "" ? firstName : `firstName=${firstName}`;
        let lastNameParam = lastName === "" ? lastName : `&lastName=${lastName}`;
        let dateOfBirthParam = dateOfBirth === "" ? dateOfBirth : `&dateOfBirth=${dateOfBirth}`;
        let phoneNumberParam = phoneNumber === "" ? phoneNumber : `&phoneNumber=${phoneNumber}`;
        let queryParams = firstNameParam + lastNameParam + dateOfBirthParam + phoneNumberParam;

        if(queryParams.charAt(0) === '&')
            queryParams = queryParams.substring(1);

        fetch(`http://localhost:3000/patients?${queryParams}`)
            .then(res => res.json())
            .then(patients => setPatients(patients));
    }

    return (
        <Box>
            <Heading size="md">Search Patients</Heading>
            <Flex flexDirection="column" gap="4">
                <Flex>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                            <Input 
                                type='text'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                            <Input 
                                type='text'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} />
                    </FormControl>
                </Flex>
                <Flex>
                    <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                            <Input 
                                type='tel'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Date of Birth</FormLabel>
                            <Input 
                                type='date'
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)} />
                    </FormControl>
                </Flex>
            </Flex>
            <Button 
                onClick={handleSubmit}
                width="100px">Search</Button>
        </Box>
        
    );
}

export default PatientSearchForm;