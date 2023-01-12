import { Tr, Td } from "@chakra-ui/react";
import { useState } from "react";
import DentistActionsGroup from "./DentistActionsGroup";

function DentistRow({ dentist: dentistData }) {

    const [dentist, setDentist] = useState(dentistData);

    return (
        <Tr>
            <Td>{dentist.firstName}</Td>
            <Td>{dentist.lastName}</Td>
            <Td>{dentist.phoneNumber}</Td>
            <Td>{dentist.email}</Td>
            <Td><DentistActionsGroup dentist={dentist} setDentist={dentist} /></Td>
        </Tr>
    );
}

export default DentistRow;