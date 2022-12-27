import { Flex, Box, Heading, Stack, Button, HStack, Text } from "@chakra-ui/react";
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
    CheckboxGroup,
    RadioGroup,
    Radio
    } from '@chakra-ui/react';
import { useState } from "react";
    

function AppontmentsDashboard() {

    const [dateSearchBy, setDateSearchBy] = useState("date")

    return (
        <Flex flexDirection="column" width="100%" height="100vh">
            <Heading>Appointments</Heading>
            <Box>
                <Heading size="md">Search Appointments</Heading>
                <FormControl as="fieldset">
                    <RadioGroup onChange={setDateSearchBy} value={dateSearchBy}>
                        <HStack>
                            <FormControl>
                                <Radio value="date">Search by date</Radio>
                                <Input type="date"  isDisabled={ dateSearchBy !== "date"} />
                            </FormControl>
                            <FormControl>
                                <Radio value="date-range">Search by date range</Radio>
                                <HStack>
                                    <Input type="date"  isDisabled={ dateSearchBy !== "date-range"}/>
                                    <Text> to </Text>
                                    <Input type="date"  isDisabled={ dateSearchBy !== "date-range"}/>
                                </HStack>
                            </FormControl>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Dentist</FormLabel>
                    <CheckboxGroup colorScheme='green' defaultValue={['dentist1']}>
                        <HStack>
                            <Checkbox value='dentist1'>dentist1</Checkbox>
                            <Checkbox value='dentist2'>dentist2</Checkbox>
                            <Checkbox value='dentist3'>dentist3</Checkbox>
                        </HStack>
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