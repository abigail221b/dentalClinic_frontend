import { FormControl, FormLabel, Input, Checkbox, CheckboxGroup, RadioGroup, Radio } from '@chakra-ui/react';
import { Heading, Button, HStack, Text, Card, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function AppointmentSearchForm() {

    const [dateSearchBy, setDateSearchBy] = useState("date");
    const [dentists, setDentists] = useState([]);
    const [dateRange, setDateRange] = useState([null, null]);

    useEffect(() => {
        fetch("http://localhost:8080/dentists")
        .then(res => res.json())
        .then(dentists => setDentists(dentists));
    }, []);

    const handleSubmit = () => {}

    return (
        <Card padding="25px" margin="10px 0" backgroundColor="white">
            <Stack gap="2">
                <Heading size="md">Search Appointments</Heading>
                <FormControl as="fieldset">
                    <RadioGroup onChange={setDateSearchBy} value={dateSearchBy}>
                        <HStack>
                            <FormControl>
                                <Radio value="date">Search by date</Radio>
                                <Input
                                    type="date"
                                    isDisabled={ dateSearchBy !== "date"} />
                            </FormControl>
                            <FormControl>
                                <Radio value="date-range">Search by date range</Radio>
                                <HStack>
                                    <Input type="date"  isDisabled={ dateSearchBy !== "date-range"}/>
                                    <Text> to </Text>
                                    <Input type="date"  isDisabled={ dateSearchBy !== "date-range"}/>
                                </HStack>
                            </FormControl>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Dentist</FormLabel>
                    <CheckboxGroup colorScheme='green'>
                        <HStack>
                            {dentists.map(dentist => (
                                <Checkbox value={dentist.id}>
                                    {`Dr. ${dentist.firstName} ${dentist.lastName}`}
                                </Checkbox>))}
                        </HStack>
                    </CheckboxGroup>
                </FormControl>
                <Button colorScheme="teal" width="100px" onClick={handleSubmit}>Search</Button>
            </Stack>
        </Card>
    );
}

export default AppointmentSearchForm;