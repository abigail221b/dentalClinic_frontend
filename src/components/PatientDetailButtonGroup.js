import NewAppointmentForm from "../pages/NewAppointmentForm";
import UpdatePatientForm from "../pages/UpdatePatientForm";

import { ButtonGroup, Button } from "@chakra-ui/react";
import { useDisclosure } from '@chakra-ui/react';
import DeletePrompt from "./DeletePrompt";

function PatientDetailButtonGroup({ patient, setPatient }) {

    const { isOpen: newApptFormIsOpen,
            onOpen: newApptFormOnOpen,
            onClose: newApptFormOnClose } = useDisclosure();

    const { isOpen: updateFormIsOpen,
            onOpen: updateFormOnOpen,
            onClose: updateFormOnClose } = useDisclosure();

    const { isOpen: deletePromptIsOpen,
            onOpen: deletePromptOnOpen,
            onClose: deletePromptOnClose } = useDisclosure();

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

            <Button colorScheme="red" onClick={deletePromptOnOpen}>Delete Patient</Button>
                <DeletePrompt
                    isOpen={deletePromptIsOpen}
                    onClose={deletePromptOnClose}
                    message={"Are you sure you want to delete patient?"}
                    endpoint={`http://${process.env.REACT_APP_BACKEND_HOST}:8080/patients/${patient.id}`} />
        </ButtonGroup>
    );
}

export default PatientDetailButtonGroup;