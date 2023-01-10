import { Flex, Button, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import DentistTable from "../components/DentistTable";

function DentistsDashboard() {
    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px">
            <Flex justifyContent="space-between">
                <Heading>Dentists</Heading>
                <Button as={RouterLink} to="/dentists/new">New Dentist</Button>
            </Flex>
            <Flex gap="10">
                <DentistTable />
            </Flex>
        </Flex>
    );
}

export default DentistsDashboard;