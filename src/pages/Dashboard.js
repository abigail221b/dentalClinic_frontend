import { Flex, Heading, TableContainer, Table, Thead, Tbody, Tr, Td, Th, Button } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import AppointmentActionsGroup from "../components/AppointmentActionsGroup";

function Dashboard() {

    const [todaysAppointments, setTodaysAppointments] = useState([]);

    useEffect(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = (1 + now.getMonth()) < 10? `0${1 + now.getMonth()}` : `${1 + now.getMonth()}`;
        const day = now.getDate();

        fetch(`http://localhost:8080/appointments?date=${year}-${month}-${day}`)
        .then(res => res.json())
        .then(setTodaysAppointments);
    }, []);

    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" backgroundColor="#F9F9F9">
            <Grid height="100%" templateColumns="repeat(5, 1fr)" templateRows="repeat(6, 1fr)" gap={6}>
                <GridItem rowSpan={3} colSpan={4} >
                    <Heading size="md">Today's Appointments ({new Date().toDateString()})</Heading>
                    <TableContainer backgroundColor="white" height="550px" overflowY="scroll">
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>First Name</Th>
                                    <Th>Last Name</Th>
                                    <Th>Date</Th>
                                    <Th>Time</Th>
                                    <Th>Duration</Th>
                                    <Th>Dentist</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {todaysAppointments.map(appointment =>
                                    <Tr>
                                        <Td>{appointment.patient.firstName}</Td>
                                        <Td>{appointment.patient.lastName}</Td>
                                        <Td>{appointment.date}</Td>
                                        <Td>{appointment.startTime}</Td>
                                        <Td>{appointment.duration}</Td>
                                        <Td>{`Dr. ${appointment.dentist.firstName} ${appointment.dentist.lastName}`}</Td>
                                        <Td><AppointmentActionsGroup appointment={appointment} /></Td>
                                    </Tr>)}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1}>
                    <Heading size="md">Quick Links</Heading>
                    <Flex flexDirection="column" gap={3}>
                        <Button>New Patient</Button>
                        <Button>New Patient</Button>
                        <Button>New Patient</Button>
                    </Flex>
                </GridItem>
            </Grid>
        </Flex>
    );
}

export default Dashboard;