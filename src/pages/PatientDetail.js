import { Card, Flex, Heading, Text, Button, Box, ButtonGroup, Divider, Stack } from "@chakra-ui/react";

function PatientDetail() {
    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="15px">
            <Card borderRadius="15px" width="100%">
                <Flex>
                    <Flex flexDirection="column" alignItems="center" gap="3" padding="25px">
                        <Heading size="lg">Jane Doe</Heading>
                        <Stack alignItems="center">
                            <Text fontSize="lg" as="b">Last Appointment</Text>
                            <Text>2022-09-10 (4 months ago)</Text>
                        </Stack>
                        <ButtonGroup>
                            <Button>Book Appointment</Button>
                            <Button>Edit Info</Button>
                            <Button>Delete Patient</Button>
                        </ButtonGroup>
                    </Flex>
                    <Divider orientation="vertical" />
                    <Flex flexWrap="wrap" width="100%" justifyContent="space-between" alignItems="center" gap="10" padding="25px">
                        <Box>
                            <Text fontSize="lg" as="b">Sex</Text>
                            <Text>F</Text>
                        </Box>
                        <Box>
                            <Text fontSize="lg" as="b">Date of Birth</Text>
                            <Text>1996-01-01 (27 yrs)</Text>
                        </Box>
                        <Box>
                            <Text fontSize="lg" as="b">Phone Number</Text>
                            <Text>(123)-546-7890</Text>
                        </Box>
                        <Box>
                            <Text fontSize="lg" as="b">Address</Text>
                            <Text>221b Baker St. London</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Card>
            <Card borderRadius="10px" width="100%">
                <Heading size="md">Upcoming Appointments</Heading>
            </Card>
            <Card borderRadius="10px" width="100%">
                <Heading size="md">Latest Payments</Heading>
            </Card>
            <Card borderRadius="10px" width="100%">
                <Heading size="md">Insurance</Heading>
            </Card>
        </Flex>
    );
}

export default PatientDetail;