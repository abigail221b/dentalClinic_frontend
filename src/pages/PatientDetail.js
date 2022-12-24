import { Card, Flex, Heading, Text } from "@chakra-ui/react";

function PatientDetail() {
    return (
        <Flex flexDirection="column" width="100%" height="100vh">
            <Heading>Patient Detail</Heading>
            <Card borderRadius="10px" width="100%">
                <Heading size="md">First Last</Heading>
                <Text>Last Appointment: </Text>
                <Text>Sex: </Text>
                <Text>Date of Birth: </Text>
                <Text>Phone Number: </Text>
                <Text>Address: </Text>
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