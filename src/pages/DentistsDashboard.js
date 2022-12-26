import { Flex, Button, Heading } from "@chakra-ui/react";
import DentistCard from "../components/DentistCard";

function DentistsDashboard() {
    return (
        <Flex flexDirection="column" width="100%" height="100vh">
            <Heading>Dentists</Heading>
            <Button maxWidth="150px">New Dentist</Button>
            <Flex gap="10">
                <DentistCard />
                <DentistCard />
                <DentistCard />
            </Flex>
        </Flex>
    );
}

export default DentistsDashboard;