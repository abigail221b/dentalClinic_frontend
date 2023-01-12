import SidebarLink from "./SidebarLink";

import { BsGridFill, BsPersonBadgeFill, BsFillCalendar2EventFill, BsFillPersonLinesFill } from "react-icons/bs";
import { Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";

function Sidebar() {

    const [selectedDashboard, setSelectedDashboard] = useState(dashboards.DASHBOARD);

    return (
        <Flex style={styles.sidebar}>
            <Stack gap="7">
                <SidebarLink
                    dashboard={dashboards.DASHBOARD}
                    icon={<BsGridFill />}
                    url={"/"}
                    selectedDashboard={selectedDashboard}
                    setSelectedDashboard={setSelectedDashboard}
                    styles={styles}
                />
                <SidebarLink
                    dashboard={dashboards.APPOINTMENTS}
                    icon={<BsFillCalendar2EventFill />}
                    url={"/appointments"}
                    selectedDashboard={selectedDashboard}
                    setSelectedDashboard={setSelectedDashboard}
                    styles={styles}
                />
                <SidebarLink
                    dashboard={dashboards.PATIENTS}
                    icon={<BsFillPersonLinesFill />}
                    url={"/patients"}
                    selectedDashboard={selectedDashboard}
                    setSelectedDashboard={setSelectedDashboard}
                    styles={styles}
                />
                <SidebarLink
                    dashboard={dashboards.DENTISTS}
                    icon={<BsPersonBadgeFill />}
                    url={"/dentists"}
                    selectedDashboard={selectedDashboard}
                    setSelectedDashboard={setSelectedDashboard}
                    styles={styles}
                />
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