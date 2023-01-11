import { ButtonGroup, Button } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';
import NewAppointmentForm from "../pages/NewAppointmentForm";
import UpdatePatientForm from "../pages/UpdatePatientForm";

function PatientDetailButtonGroup({ patient, setPatient }) {

    const { isOpen: newApptFormIsOpen, onOpen: newApptFormOnOpen, onClose: newApptFormOnClose } = useDisclosure();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <ButtonGroup>
            <Button onClick={newApptFormOnOpen}>Book Appointment</Button>
                <NewAppointmentForm isOpen={newApptFormIsOpen} onClose={newApptFormOnClose} patient={patient} />
                
            <Button onClick={onOpen}>Edit Patient</Button>
                <UpdatePatientForm isOpen={isOpen} onClose={onClose} patient={patient} setPatient={setPatient} />
                
            <Button>Delete Patient</Button>
        </ButtonGroup>
    );
}

export default PatientDetailButtonGroup;