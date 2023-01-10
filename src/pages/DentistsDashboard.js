import { Flex, Button, Heading } from "@chakra-ui/react";
import DentistCard from "../components/DentistCard";
import DentistTable from "../components/DentistTable";

function DentistsDashboard() {
    return (
        <Flex flexDirection="column" width="100%" height="100vh" padding="25px">
            <Flex justifyContent="space-between">
                <Heading>Dentists</Heading>
                <Button>New Dentist</Button>
            </Flex>
            <Flex gap="10">
                <DentistTable />
            </Flex>
        </Flex>
    );
}

export default DentistsDashboard;