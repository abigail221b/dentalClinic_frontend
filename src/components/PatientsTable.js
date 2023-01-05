import { Box, Table, TableContainer, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import ActionsGroup from "./ActionsGroup";

function PatientsTable({ patients }) {
    return (
        <Box height="auto" overflowY="scroll">
            <TableContainer>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>Sex</Th>
                            <Th>Date of Birth</Th>
                            <Th>Phone Number</Th>
                            <Th>Address</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {patients.map(patient => {
                            return (
                                <Tr>
                                    <Td>{patient.firstName}</Td>
                                    <Td>{patient.lastName}</Td>
                                    <Td>{patient.sex}</Td>
                                    <Td>{patient.dateOfBirth}</Td>
                                    <Td>{patient.phoneNumber}</Td>
                                    <Td>{patient.address}</Td>
                                    <Td><ActionsGroup /></Td>
                                </Tr>)})}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default PatientsTable;