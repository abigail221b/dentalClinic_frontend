import AppointmentSearchForm from "../components/AppointmentSearchForm";
import AppointmentsTable from "../components/AppointmentsTable";

import { Flex, Heading } from "@chakra-ui/react";

function AppontmentsDashboard() {
    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px">
            <Heading>Appointments</Heading>
            <AppointmentSearchForm />
            <AppointmentsTable />
        </Flex>
    );
}

export default AppontmentsDashboard;