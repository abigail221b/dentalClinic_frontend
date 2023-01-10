import { Flex, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";
import PatientSearchForm from "../components/PatientSearchForm";
import PatientsTable from "../components/PatientsTable";
import { Link as RouterLink } from "react-router-dom";

function PatientsDashboard() {

    const [patients, setPatients] = useState([]);
    const [loadingData, setLoadingData] = useState(false);

    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px">
            <Flex justifyContent="space-between">
                <Heading>Patients</Heading>
                <Button as={ RouterLink } to="/patients/new">New Patient</Button>
            </Flex>
            <PatientSearchForm setPatients={setPatients} setLoadingData={setLoadingData} />
            <PatientsTable patients={patients} loadingData={loadingData} />
        </Flex>
    );
}

export default PatientsDashboard;