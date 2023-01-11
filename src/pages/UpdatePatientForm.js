import { Flex, FormControl, FormLabel, Input, HStack, RadioGroup, Radio, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";

function UpdatePatientForm({ patientData }) {

    const [patient, setPatient] = useState(patientData);
    
    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" gap="3">
            <Heading>Update Patient Information</Heading>
                <HStack>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" value={patient.firstName} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" value={patient.lastName} />
                    </FormControl>
                </HStack>
                <HStack>
                    <FormControl>
                        <FormLabel>Sex</FormLabel>
                        <RadioGroup value={patient.sex}>
                            <HStack>
                                <Radio value="M">M</Radio>
                                <Radio value="F">F</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Date of Birth</FormLabel>
                        <Input type="date" value={patient.dateOfBirth} />
                    </FormControl>
                </HStack>
                <HStack>
                    <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                        <Input type="tel" value={patient.phoneNumber} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" value={patient.email} />
                    </FormControl>
                </HStack>
                <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input type="text" value={patient.address} />
                </FormControl>
                <Button width="100px">Update</Button>
        </Flex>
    );
}

export default UpdatePatientForm;