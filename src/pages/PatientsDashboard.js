import PatientSearchForm from "../components/PatientSearchForm";
import PatientsTable from "../components/PatientsTable";

import { Flex, Heading, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

function PatientsDashboard() {

    const [patients, setPatients] = useState([]);
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/patients")
        .then(res => res.json())
        .then(patients => setPatients(patients));
    }, []);

    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" backgroundColor="#F9F9F9">
            <Flex justifyContent="space-between">
                <Heading>Patients</Heading>
                <Button as={ RouterLink } to="/patients/new">New Patient</Button>
            </Flex>
            <PatientSearchForm
                setPatients={setPatients}
                setLoadingData={setLoadingData} />
            <PatientsTable
                patients={patients}
                loadingData={loadingData} />
        </Flex>
    );
}

export default PatientsDashboard;