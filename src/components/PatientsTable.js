import { Box, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

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
                        
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
        
    );
}

export default PatientsTable;