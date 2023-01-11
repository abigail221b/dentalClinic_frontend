import { ButtonGroup, Button } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';
import NewAppointmentForm from "../pages/NewAppointmentForm";
import UpdatePatientForm from "../pages/UpdatePatientForm";

function PatientDetailButtonGroup({ patient }) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <ButtonGroup>
            <Button onClick={onOpen}>Book Appointment</Button>
                <NewAppointmentForm isOpen={isOpen} onClose={onClose} patient={patient} />
                
            <Button onClick={onOpen}>Edit Patient</Button>
                <UpdatePatientForm isOpen={isOpen} onClose={onClose} patientData={patient} />
                
            <Button>Delete Patient</Button>
        </ButtonGroup>
    );
}

export default PatientDetailButtonGroup;