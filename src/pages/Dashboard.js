import { Flex, Heading, TableContainer, Table, Thead, Tbody, Tr, Td, Th, Button } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'

function Dashboard() {
    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" backgroundColor="#F9F9F9">
            <Heading>Dashboard</Heading>
            <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(5, 1fr)" gap={6}>
                <GridItem rowSpan={2} colSpan={3}>
                    <Heading size="md">Today's Appointments</Heading>
                    <TableContainer backgroundColor="white">
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

                            </Tbody>
                        </Table>
                    </TableContainer>
                </GridItem>
                <GridItem>
                    <Heading size="md">Quick Links</Heading>
                    <Flex flexDirection="column" width="100%" gap={3}>
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