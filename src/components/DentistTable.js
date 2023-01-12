import DentistRow from "./DentistRow";

import { Box, Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

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
                    <Tbody>{dentists.map(dentist => <DentistRow dentist={dentist} />)}</Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default DentistTable;