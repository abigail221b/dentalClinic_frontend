import { Flex, Heading } from "@chakra-ui/react";

import AppointmentSearchForm from "../components/AppointmentSearchForm";
import AppointmentsTable from "../components/AppointmentsTable";

function AppontmentsDashboard() {

    return (
        <Flex flexDirection="column" width="100%" height="100vh">
            <Heading>Appointments</Heading>
            <AppointmentSearchForm />
            <AppointmentsTable />
        </Flex>
    );
}

export default AppontmentsDashboard;