import { ButtonGroup, Button } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';
import NewAppointmentForm from "../pages/NewAppointmentForm";

function PatientDetailButtonGroup({ patient }) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <ButtonGroup>
            <Button onClick={onOpen}>Book Appointment</Button>
                <NewAppointmentForm isOpen={isOpen} onClose={onClose} patient={patient} />
                
            <Button>Edit Patient</Button>
            <Button>Delete Patient</Button>
        </ButtonGroup>
    );
}

export default PatientDetailButtonGroup;