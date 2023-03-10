import ActionsGroup from "./ActionsGroup";

import { Table, TableContainer, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import { Box, Skeleton } from '@chakra-ui/react'

function PatientsTable({ patients, loadingData }) {
    return (
        <Box width="100%" height="auto" overflowY="scroll" backgroundColor="white">
            <TableContainer width="100%">
                <Table>
                    <Thead>
                        <Tr>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>Sex</Th>
                            <Th>Date of Birth</Th>
                            <Th>Phone Number</Th>
                            <Th>Email</Th>
                            <Th>Address</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    {
                        loadingData?
                        <Tbody>
                            <Tr>
                                <Td><Skeleton height="30px" /></Td>
                                <Td><Skeleton height="30px" /></Td>
                                <Td><Skeleton height="30px" /></Td>
                                <Td><Skeleton height="30px" /></Td>
                                <Td><Skeleton height="30px" /></Td>
                                <Td><Skeleton height="30px" /></Td>
                                <Td><Skeleton height="30px" /></Td>
                                <Td><Skeleton height="30px" /></Td>
                            </Tr>
                        </Tbody>
                        :
                        <Tbody>
                            {patients.map(patient => (
                                <Tr>
                                    <Td>{patient.firstName}</Td>
                                    <Td>{patient.lastName}</Td>
                                    <Td>{patient.sex}</Td>
                                    <Td>{patient.dateOfBirth}</Td>
                                    <Td>{patient.phoneNumber}</Td>
                                    <Td>{patient.email}</Td>
                                    <Td>{patient.address}</Td>
                                    <Td><ActionsGroup patient={patient} /></Td>
                                </Tr>))}
                        </Tbody>
                    }
                </Table>
            </TableContainer>
        </Box>
    );
}

export default PatientsTable;