import { Heading, Flex, FormControl, FormLabel, Input, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewDentistForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [formError, setFormError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if(firstName === "" || lastName === "" || phoneNumber === "" || email === "") {
            setFormError(true);
            return;
        }

        fetch(`http://${process.env.REACT_APP_BACKEND_HOST}:8080/dentists`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email
            })
        })
        .then(res => {
            if(res.status === 200)
                navigate("/dentists");
        })
    }

    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" gap="3">
            <Heading>New Dentist</Heading>
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
                            onChange={e => setLastName(e.target.value)} />
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
                <Button colorScheme="teal" width="100px" onClick={handleSubmit}>Submit</Button>
        </Flex>
    );
}

export default NewDentistForm;