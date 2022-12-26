import { Card, CardBody, CardFooter, Image, Heading, Button } from '@chakra-ui/react'

function DentistCard() {
    return (
        <Card>
            <CardBody>
                <Image src="https://via.placeholder.com/200" borderRadius="lg" />
                <Heading size='md'>Dentist 1</Heading>
            </CardBody>
            <CardFooter>
                <Button>Details</Button>
            </CardFooter>
        </Card>
    );
}

export default DentistCard;