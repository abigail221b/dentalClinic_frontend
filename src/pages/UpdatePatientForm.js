import { Flex, FormControl, FormLabel, Input, HStack, RadioGroup, Radio, Heading, Button } from "@chakra-ui/react";

function UpdatePatientForm() {
    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" gap="3">
            <Heading>Update Patient Information</Heading>
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
                <Button width="100px">Update</Button>
        </Flex>
    );
}

export default UpdatePatientForm;