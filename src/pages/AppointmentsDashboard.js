import { Flex, Box, Heading, Stack, Button } from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    CheckboxGroup
    } from '@chakra-ui/react';
    

function AppontmentsDashboard() {
    return (
        <Flex flexDirection="column" width="100%" height="100vh">
            <Heading>Appointments</Heading>
            <Box>
                <Heading size="md">Search Appointments</Heading>
                <FormControl>
                    <FormLabel>Date</FormLabel>
                    <Input type="Date" />
                </FormControl>
                <FormControl>
                    <FormLabel>Dentist</FormLabel>
                    <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                        <Stack spacing={[1, 5]} direction={['column', 'row']}>
                            <Checkbox value='naruto'>Naruto</Checkbox>
                            <Checkbox value='sasuke'>Sasuke</Checkbox>
                            <Checkbox value='kakashi'>Kakashi</Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </FormControl>
                <Button>Search</Button>
            </Box>
            <TableContainer>
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
        </Flex>
    );
}

export default AppontmentsDashboard;