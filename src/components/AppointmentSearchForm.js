import { FormControl, FormLabel, Input, Checkbox, CheckboxGroup, RadioGroup, Radio } from '@chakra-ui/react';
import { Heading, Button, HStack, Text, Card, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function AppointmentSearchForm({ setAppointments }) {

    const [dateSearchBy, setDateSearchBy] = useState("date");
    const [dentists, setDentists] = useState([]);
    const [dateRange, setDateRange] = useState([null, null]);
    const [selectedDentists, setSelectedDentists] = useState([]);

    useEffect(() => {
        fetch(`http://${process.env.REACT_APP_BACKEND_HOST}:8080/dentists`)
        .then(res => res.json())
        .then(dentists => setDentists(dentists));
    }, []);

    const handleSubmit = () => {
        let url = `http://${process.env.REACT_APP_BACKEND_HOST}:8080/appointments?`;

        if(dateSearchBy === "date")
            url = url + `date=${dateRange[0]}` + (selectedDentists.length > 0? `&dentistIds=${selectedDentists}` : "");
        else
            url = url + `after=${dateRange[0]}&before=${dateRange[1]}` + (selectedDentists.length > 0? `&dentistIds=${selectedDentists}` : "");

        fetch(url)
        .then(res => res.json())
        .then(appointments => setAppointments(appointments));
    }

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
                                    size="sm"
                                    value={dateSearchBy === "date"? dateRange[0] : ""}
                                    onChange={e => setDateRange([e.target.value, dateRange[1]])}
                                    isDisabled={ dateSearchBy !== "date"} />
                            </FormControl>
                            <FormControl>
                                <Radio value="date-range">Search by date range</Radio>
                                <HStack>
                                    <Input
                                        type="date"
                                        size="sm"
                                        value={dateSearchBy === "date-range"? dateRange[0] : ""}
                                        onChange={e => setDateRange([e.target.value, dateRange[1]])}
                                        isDisabled={ dateSearchBy !== "date-range"}/>
                                    <Text> to </Text>
                                    <Input
                                        type="date"
                                        size="sm"
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
                    <CheckboxGroup colorScheme='green' value={selectedDentists} onChange={setSelectedDentists}>
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