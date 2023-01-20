import { Heading, Flex, FormControl, FormLabel, Input, HStack, Button, RadioGroup, Radio } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPatientForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [sex, setSex] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [formError, setFormError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {

        if(firstName === "" || lastName === "" || sex === "" || dateOfBirth === "" ||
            phoneNumber === "" || email === "" || address === "") {
            setFormError(true);
            return;
        }

        fetch(`http://${process.env.REACT_APP_BACKEND_HOST}:8080/patients`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                sex: sex,
                dateOfBirth: dateOfBirth,
                phoneNumber: phoneNumber,
                email: email,
                address: address
            })
        })
        .then(res => res.json())
        .then(patient => navigate(`/patients/${patient.id}`, { state: { patient: patient } }));
    }

    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" gap="3">
            <Heading>New Patient</Heading>
                <HStack>
                    <FormControl isInvalid={formError && firstName === ""}>
                        <FormLabel>First Name</FormLabel>
                        <Input
                            type="text"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)} />
                    </FormControl>
                    <FormControl isInvalid={formError && lastName === ""}>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                            type="text"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}  />
                    </FormControl>
                </HStack>
                <HStack>
                    <FormControl isInvalid={formError && sex === ""}>
                        <FormLabel>Sex</FormLabel>
                        <RadioGroup onChange={setSex}>
                            <HStack>
                                <Radio value="M">M</Radio>
                                <Radio value="F">F</Radio>
                            </HStack>
                        </RadioGroup>
                    </FormControl>
                    <FormControl isInvalid={formError && dateOfBirth === ""}>
                        <FormLabel>Date of Birth</FormLabel>
                        <Input
                            type="date"
                            value={dateOfBirth}
                            onChange={e => setDateOfBirth(e.target.value)} />
                    </FormControl>
                </HStack>
                <HStack>
                    <FormControl isInvalid={formError && phoneNumber === ""}>
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                            type="tel"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)} />
                    </FormControl>
                    <FormControl isInvalid={formError && email === ""}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </FormControl>
                </HStack>
                <FormControl isInvalid={formError && address === ""}>
                    <FormLabel>Address</FormLabel>
                    <Input
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)} />
                </FormControl>
                <Button colorScheme="teal" width="100px" onClick={handleSubmit}>Submit</Button>
        </Flex>
    );
}

export default NewPatientForm;