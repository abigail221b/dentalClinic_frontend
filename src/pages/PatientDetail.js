import PatientDetailButtonGroup from "../components/PatientDetailButtonGroup";

import { Card, Flex, Heading, Text, Divider, Stack } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AppointmentsTable from "../components/AppointmentsTable";

function PatientDetail() {

    const location = useLocation();
    const [patient, setPatient] = useState(location.state.patient);
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);

    useEffect(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = (1 + now.getMonth()) < 10? `0${1 + now.getMonth()}` : `${1 + now.getMonth()}`;
        const day = now.getDate();

        fetch(`http://${process.env.REACT_APP_BACKEND_HOST}:8080/patients/${patient.id}/appointments?after=${year}-${month}-${day}`)
        .then(res => res.json())
        .then(setUpcomingAppointments);
    }, [patient.id]);

    const calculateAge = (dateOfBirth) => {
        const dob = Date.parse(dateOfBirth);
        const now = Date.now();
        const diff = now - dob;

        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    }

    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" gap="5">
            <Card borderRadius="15px" width="100%">
                <Flex padding="25px">
                    <Flex flexDirection="column" alignItems="center" gap="3" paddingRight="25px">
                        <Heading size="lg">{`${patient.firstName} ${patient.lastName}`}</Heading>
                        <Stack alignItems="center">
                            <Text fontSize="lg" as="b">Last Appointment</Text>
                            <Text>2022-09-10 (4 months ago)</Text>
                        </Stack>
                        <PatientDetailButtonGroup patient={patient} setPatient={setPatient} />
                    </Flex>
                    <Divider orientation="vertical" />
                    <Grid templateColumns="repeat(3, 1fr)" gap="6" width="100%" paddingLeft="25px">
                        <GridItem>
                            <Text fontSize="lg" as="b">Sex</Text>
                            <Text>{patient.sex}</Text>
                        </GridItem>
                        <GridItem>
                            <Text fontSize="lg" as="b">Date of Birth</Text>
                            <Text>{`${patient.dateOfBirth} (${calculateAge(patient.dateOfBirth)} yrs old)`}</Text>
                        </GridItem>
                        <GridItem>
                            <Text fontSize="lg" as="b">Phone Number</Text>
                            <Text>{patient.phoneNumber}</Text>
                        </GridItem>
                        <GridItem>
                            <Text fontSize="lg" as="b">Email</Text>
                            <Text>{patient.email}</Text>
                        </GridItem>
                        <GridItem>
                            <Text fontSize="lg" as="b">Address</Text>
                            <Text>{patient.address}</Text>
                        </GridItem>
                    </Grid>

                </Flex>
            </Card>
            <Card borderRadius="10px" width="100%" padding="25px">
                <Heading size="md">Upcoming Appointments</Heading>
                <AppointmentsTable
                    appointments={upcomingAppointments}
                    displayPatientName={false} />
            </Card>
            <Card borderRadius="10px" width="100%" padding="25px">
                <Heading size="md">Latest Payments</Heading>
            </Card>
            <Card borderRadius="10px" width="100%" padding="25px">
                <Heading size="md">Insurance</Heading>
            </Card>
        </Flex>
    );
}

export default PatientDetail;