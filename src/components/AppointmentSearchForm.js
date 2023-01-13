import { FormControl, FormLabel, Input, Checkbox, CheckboxGroup, RadioGroup, Radio } from '@chakra-ui/react';
import { Heading, Button, HStack, Text, Card, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function AppointmentSearchForm({ setAppointments }) {

    const [dateSearchBy, setDateSearchBy] = useState("date");
    const [dentists, setDentists] = useState([]);
    const [dateRange, setDateRange] = useState([null, null]);
    const [selectedDentist, setSelectedDentist] = useState([]);

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
                    <RadioGroup onChange={(e) => {
                        setDateSearchBy(e);
                        setDateRange([null, null]);
                    }} value={dateSearchBy}>
                        <HStack>
                            <FormControl>
                                <Radio value="date">Search by date</Radio>
                                <Input
                                    type="date"
                                    value={dateSearchBy === "date"? dateRange[0] : ""}
                                    onChange={e => setDateRange([e.target.value, dateRange[1]])}
                                    isDisabled={ dateSearchBy !== "date"} />
                            </FormControl>
                            <FormControl>
                                <Radio value="date-range">Search by date range</Radio>
                                <HStack>
                                    <Input
                                        type="date"
                                        value={dateSearchBy === "date-range"? dateRange[0] : ""}
                                        onChange={e => setDateRange([e.target.value, dateRange[1]])}
                                        isDisabled={ dateSearchBy !== "date-range"}/>
                                    <Text> to </Text>
                                    <Input
                                        type="date"
                                        value={dateSearchBy === "date-range"? dateRange[1] : ""}
                                        onChange={e => setDateRange([dateRange[0], e.target.value])}
                                        isDisabled={ dateSearchBy !== "date-range"}/>
                                </HStack>
                            </FormControl>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Dentist</FormLabel>
                    <CheckboxGroup colorScheme='green' value={selectedDentist} onChange={setSelectedDentist}>
                        <HStack>
                            {dentists.map(dentist => (
                                <Checkbox value={`${dentist.id}`}>
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