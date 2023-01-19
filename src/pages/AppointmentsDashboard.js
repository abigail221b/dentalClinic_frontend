import AppointmentSearchForm from "../components/AppointmentSearchForm";
import AppointmentsTable from "../components/AppointmentsTable";

import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

function AppontmentsDashboard() {

    const [appointments, setAppointments] = useState([]);

    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" backgroundColor="#F9F9F9">
            <Heading>Appointments</Heading>
            <AppointmentSearchForm setAppointments={setAppointments} />
            <AppointmentsTable
                appointments={appointments}
                displayPatientName={true} />
        </Flex>
    );
}

export default AppontmentsDashboard;