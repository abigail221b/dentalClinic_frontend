import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import AppointmentActionsGroup from './AppointmentActionsGroup';

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
                        {appointments.map(appointment => (
                            <Tr>
                                <Td>{appointment.id.patient.firstName}</Td>
                                <Td>{appointment.id.patient.lastName}</Td>
                                <Td>{appointment.id.date}</Td>
                                <Td>{appointment.id.startTime}</Td>
                                <Td>{appointment.duration}</Td>
                                <Td>{`Dr. ${appointment.dentist.firstName} ${appointment.dentist.lastName}`}</Td>
                                <Td><AppointmentActionsGroup /></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
    );
}

export default AppointmentsTable;