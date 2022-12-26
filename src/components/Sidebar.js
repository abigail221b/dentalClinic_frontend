import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { BsGridFill, BsPersonBadgeFill, BsFillCalendar2EventFill, BsFillPersonLinesFill } from "react-icons/bs";

function Sidebar() {
    return (
        <Flex style={ styles.sidebar }>
            <Box>
                <Flex style={ styles.link }>
                    <Box style={ styles.icon }>
                        <BsGridFill/>
                    </Box>
                    <Text style={ styles.text }>
                        <Link as={ RouterLink } to="/">Dashboard</Link>
                    </Text>
                </Flex>
                <Flex style={ styles.link }>
                    <Box style={ styles.icon }>
                        <BsFillCalendar2EventFill />
                    </Box>
                    <Text style={ styles.text }>
                        <Link as={ RouterLink } to="/appointments">Appointments</Link>
                    </Text>
                </Flex>
                <Flex style={ styles.link }>
                    <Box style={ styles.icon }>
                        <BsFillPersonLinesFill />
                    </Box>
                    <Text style={ styles.text }>
                        <Link as={ RouterLink } to="/patients">Patients</Link>
                    </Text>
                </Flex>
                <Flex style={ styles.link }>
                    <Box style={ styles.icon }>
                        <BsPersonBadgeFill />
                    </Box>
                    <Text style={ styles.text }>
                        <Link as={ RouterLink } to="/dentists">Dentists</Link>
                    </Text>
                </Flex>
            </Box>
            
        </Flex>
    );
}

const styles = {
    sidebar: {
        width: "200px",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center"
    },
    icon: {
        position: "relative",
        top: "-2px"
    },
    link: {
        padding: "30px",
        gap: "7px",
        alignItems: "center",
    },
    text: {
        fontSize: "large",
        fontWeight: "bold"
    }
};

export default Sidebar;