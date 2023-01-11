import { ButtonGroup, Button } from "@chakra-ui/react";

function PatientDetailButtonGroup() {
    return (
        <ButtonGroup>
            <Button>Book Appointment</Button>
            <Button>Edit Patient</Button>
            <Button>Delete Patient</Button>
        </ButtonGroup>
    );
}

export default PatientDetailButtonGroup;