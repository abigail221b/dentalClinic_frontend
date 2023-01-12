import DentistActionsGroup from "./DentistActionsGroup";

import { Tr, Td } from "@chakra-ui/react";
import { useState } from "react";

function DentistRow({ dentist: dentistData }) {

    const [dentist, setDentist] = useState(dentistData);

    return (
        <Tr>
            <Td>{dentist.firstName}</Td>
            <Td>{dentist.lastName}</Td>
            <Td>{dentist.phoneNumber}</Td>
            <Td>{dentist.email}</Td>
            <Td>
                <DentistActionsGroup
                    dentist={dentist}
                    setDentist={setDentist} />
            </Td>
        </Tr>
    );
}

export default DentistRow;