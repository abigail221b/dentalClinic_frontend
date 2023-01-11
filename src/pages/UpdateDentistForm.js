import { Heading, Flex, FormControl, FormLabel, Input, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";

function UpdateDentistForm({ dentist }) {
    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" gap="3">
            <Heading>Update Dentist</Heading>
                <HStack>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" value={dentist.firstName} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" value={dentist.lastName} />
                    </FormControl>
                </HStack>
                <HStack>
                    <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                        <Input type="tel" value={dentist.phoneNumber} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" value={dentist.email} />
                    </FormControl>
                </HStack>
                <Button width="100px">Submit</Button>
        </Flex>
    );
}

export default UpdateDentistForm;