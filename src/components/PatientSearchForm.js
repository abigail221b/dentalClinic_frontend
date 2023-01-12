import { Button, Card, Flex, Heading, Stack } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useState } from "react";

function PatientSearchForm({ setPatients, setLoadingData }) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isEmptyForm, setIsEmptyForm] = useState(false);

    const handleSubmit = () => {
        if(firstName === "" && lastName === "" && dateOfBirth === "" && phoneNumber === "") {
            setIsEmptyForm(true);
            return;
        }

        let firstNameParam = firstName === "" ? firstName : `firstName=${firstName}`;
        let lastNameParam = lastName === "" ? lastName : `&lastName=${lastName}`;
        let dateOfBirthParam = dateOfBirth === "" ? dateOfBirth : `&dateOfBirth=${dateOfBirth}`;
        let phoneNumberParam = phoneNumber === "" ? phoneNumber : `&phoneNumber=${phoneNumber}`;
        let queryParams = firstNameParam + lastNameParam + dateOfBirthParam + phoneNumberParam;

        if(queryParams.charAt(0) === '&')
            queryParams = queryParams.substring(1);

        setLoadingData(true);

        fetch(`http://localhost:8080/patients?${queryParams}`)
            .then(res => res.json())
            .then(patients => setPatients(patients))
            .then(() => setLoadingData(false));
    }

    return (
        <Card padding="25px" margin="10px 0" backgroundColor="white">
            <Stack gap="2">
                <Heading size="md">Search Patients</Heading>
                <Flex flexDirection="column" gap="3">
                    <Flex gap="5">
                        <FormControl isInvalid={isEmptyForm}>
                            <FormLabel>First Name</FormLabel>
                                <Input 
                                    type='text'
                                    value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                        if(isEmptyForm) setIsEmptyForm(false);
                                    }} />
                        </FormControl>

                        <FormControl isInvalid={isEmptyForm}>
                            <FormLabel>Last Name</FormLabel>
                                <Input 
                                    type='text'
                                    value={lastName}
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                        if(isEmptyForm) setIsEmptyForm(false);
                                    }} />
                        </FormControl>
                    </Flex>
                    
                    <Flex gap="5">
                        <FormControl isInvalid={isEmptyForm}>
                            <FormLabel>Phone Number</FormLabel>
                                <Input 
                                    type='tel'
                                    value={phoneNumber}
                                    onChange={(e) => {
                                        setPhoneNumber(e.target.value);
                                        if(isEmptyForm) setIsEmptyForm(false);
                                    }} />
                        </FormControl>

                        <FormControl isInvalid={isEmptyForm}>
                            <FormLabel>Date of Birth</FormLabel>
                                <Input 
                                    type='date'
                                    value={dateOfBirth}
                                    onChange={(e) => {
                                        setDateOfBirth(e.target.value);
                                        if(isEmptyForm) setIsEmptyForm(false);
                                    }} />
                        </FormControl>
                    </Flex>
                </Flex>

                {isEmptyForm && <p>Please complete at least one field.</p>}

                <Button 
                    onClick={handleSubmit}
                    width="100px">Search</Button>
            </Stack>
        </Card>
        
    );
}

export default PatientSearchForm;