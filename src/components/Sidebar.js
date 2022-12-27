import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, HStack, Link, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/react";
import { BsGridFill, BsPersonBadgeFill, BsFillCalendar2EventFill, BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

function Sidebar() {

    const [selectedDashboard, setSelectedDashboard] = useState(dashboards.DASHBOARD);

    return (
        <Flex style={ styles.sidebar }>
            <Stack gap="7">
                <LinkBox 
                    as={ RouterLink } 
                    to="/"
                    onClick={() => setSelectedDashboard(dashboards.DASHBOARD)} 
                    style={{...styles.link, ...(selectedDashboard === dashboards.DASHBOARD && styles.selectedLink )}}>
                    <LinkOverlay>
                        <HStack>
                            <Box style={ styles.icon }>
                                <BsGridFill />
                            </Box>
                            <Text>{ dashboards.DASHBOARD }</Text>
                        </HStack>
                    </LinkOverlay>
                </LinkBox>
                <LinkBox 
                    as={ RouterLink } 
                    to="/appointments"
                    onClick={() => setSelectedDashboard(dashboards.APPOINTMENTS)} 
                    style={{...styles.link, ...(selectedDashboard === dashboards.APPOINTMENTS && styles.selectedLink )}}>
                    <LinkOverlay>
                        <HStack>
                            <Box style={ styles.icon }>
                                <BsFillCalendar2EventFill />
                            </Box>
                            <Text>{ dashboards.APPOINTMENTS }</Text>
                        </HStack>
                    </LinkOverlay>
                </LinkBox>
                <LinkBox 
                    as={ RouterLink } 
                    to="/patients" 
                    onClick={() => setSelectedDashboard(dashboards.PATIENTS)} 
                    style={{...styles.link, ...(selectedDashboard === dashboards.PATIENTS && styles.selectedLink )}}>
                    <LinkOverlay>
                        <HStack>
                            <Box style={ styles.icon }>
                                <BsFillPersonLinesFill />
                            </Box>
                            <Text>{ dashboards.PATIENTS }</Text>
                        </HStack>
                    </LinkOverlay>
                </LinkBox>
                <LinkBox
                    as={ RouterLink } 
                    to="/dentists"
                    onClick={() => setSelectedDashboard(dashboards.DENTISTS)} 
                    style={{...styles.link, ...(selectedDashboard === dashboards.DENTISTS && styles.selectedLink )}}>
                    <LinkOverlay>
                        <HStack>
                            <Box style={ styles.icon }>
                                <BsPersonBadgeFill />
                            </Box>
                            <Text>{ dashboards.DENTISTS }</Text>
                        </HStack>
                    </LinkOverlay>
                </LinkBox>
            </Stack>
            
        </Flex>
    );
}

const styles = {
    sidebar: {
        width: "225px",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#f2f5f5",
        color: "#434242"
    },
    icon: {
        position: "relative",
        top: "-2px"
    },
    link: {
        padding: "15px",
        gap: "7px",
        fontSize: "large",
        fontWeight: "bold"
    },
    selectedLink: {
        color: "#0abab5",
        borderRight: "10px solid #0abab5"
    }
};

const dashboards = {
    DASHBOARD: "Dashboard",
    APPOINTMENTS: "Appointments",
    PATIENTS: "Patients",
    DENTISTS: "Dentists"
}

export default Sidebar;