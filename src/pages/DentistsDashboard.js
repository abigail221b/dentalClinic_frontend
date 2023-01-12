import DentistTable from "../components/DentistTable";

import { Flex, Button, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

function DentistsDashboard() {

    const [dentists, setDentists] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/dentists")
        .then(res => res.json())
        .then(dentists => setDentists(dentists));
    }, []);

    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px" gap="4" backgroundColor="#F9F9F9">
            <Flex justifyContent="space-between">
                <Heading>Dentists</Heading>
                <Button as={RouterLink} to="/dentists/new" colorScheme="teal">New Dentist</Button>
            </Flex>
            <Flex>
                <DentistTable dentists={dentists}/>
            </Flex>
        </Flex>
    );
}

export default DentistsDashboard;