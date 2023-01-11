import { Box, Table, TableContainer, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import DentistActionsGroup from "./DentistActionsGroup";

function DentistTable({ dentists }) {
    return (
        <Box width="100%" height="auto" overflowY="scroll">
            <TableContainer width="100%">
                <Table>
                    <Thead>
                        <Tr>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>Phone Number</Th>
                            <Th>Email</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {dentists.map(dentist => (
                            <Tr>
                                <Td>{dentist.firstName}</Td>
                                <Td>{dentist.lastName}</Td>
                                <Td>{dentist.phoneNumber}</Td>
                                <Td>{dentist.email}</Td>
                                <Td><DentistActionsGroup /></Td>
                            </Tr>
                        ))}
                        
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default DentistTable;