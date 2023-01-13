import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';

function AppointmentsTable({ appointments }) {
    return (
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
    );
}

export default AppointmentsTable;