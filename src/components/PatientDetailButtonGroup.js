import NewAppointmentForm from "../pages/NewAppointmentForm";
import UpdatePatientForm from "../pages/UpdatePatientForm";

import { ButtonGroup, Button } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';

function PatientDetailButtonGroup({ patient, setPatient }) {

    const { isOpen: newApptFormIsOpen,
            onOpen: newApptFormOnOpen,
            onClose: newApptFormOnClose } = useDisclosure();

    const { isOpen: updateFormIsOpen,
            onOpen: updateFormOnOpen,
            onClose: updateFormOnClose } = useDisclosure();

    return (
        <ButtonGroup>
            <Button colorScheme="teal" onClick={newApptFormOnOpen}>Book Appointment</Button>
                <NewAppointmentForm
                    isOpen={newApptFormIsOpen}
                    onClose={newApptFormOnClose}
                    patient={patient} />

            <Button colorScheme="teal" onClick={updateFormOnOpen}>Edit Patient</Button>
                <UpdatePatientForm
                    isOpen={updateFormIsOpen}
                    onClose={updateFormOnClose}
                    patient={patient}
                    setPatient={setPatient} />

            <Button colorScheme="teal">Delete Patient</Button>
        </ButtonGroup>
    );
}

export default PatientDetailButtonGroup;