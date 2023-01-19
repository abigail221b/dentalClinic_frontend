import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import AppointmentActionsGroup from './AppointmentActionsGroup';

function AppointmentsTable({ appointments, displayPatientName }) {
    return (
        <TableContainer backgroundColor="white">
                <Table>
                    <Thead>
                        <Tr>
                            {displayPatientName &&
                                <>
                                    <Th>First Name</Th>
                                    <Th>Last Name</Th>
                                </>}
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
                                {displayPatientName &&
                                    <>
                                        <Td>{appointment.patient.firstName}</Td>
                                        <Td>{appointment.patient.lastName}</Td>
                                    </>}
                                <Td>{appointment.date}</Td>
                                <Td>{appointment.startTime}</Td>
                                <Td>{appointment.duration}</Td>
                                <Td>{`Dr. ${appointment.dentist.firstName} ${appointment.dentist.lastName}`}</Td>
                                <Td><AppointmentActionsGroup appointment={appointment} /></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
    );
}

export default AppointmentsTable;