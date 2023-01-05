import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import PatientSearchForm from "../components/PatientSearchForm";
import PatientsTable from "../components/PatientsTable";

function PatientsDashboard() {

    const [patients, setPatients] = useState([]);

    return (
        <Flex flexDirection="column" width="100%" height="100vh">
            <Heading>Patients</Heading>
            <PatientSearchForm setPatients={setPatients} />
            <PatientsTable patients={patients} />
        </Flex>
    );
}

export default PatientsDashboard;