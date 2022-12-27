import { Flex, Heading } from "@chakra-ui/react";
import PatientSearchForm from "../components/PatientSearchForm";
import PatientsTable from "../components/PatientsTable";

function PatientsDashboard() {
    return (
        <Flex flexDirection="column" width="100%" height="100vh">
            <Heading>Patients</Heading>
            <PatientSearchForm />
            <PatientsTable />
        </Flex>
    );
}

export default PatientsDashboard;