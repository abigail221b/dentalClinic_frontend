import { LinkBox, LinkOverlay, HStack, Box, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function SidebarLink({ dashboard, icon, url, selectedDashboard, setSelectedDashboard, styles }) {
    return (
        <LinkBox
            as={RouterLink}
            to={url}
            onClick={() => setSelectedDashboard(dashboard)}
            style={{...styles.link, ...(selectedDashboard === dashboard && styles.selectedLink )}}>
            <LinkOverlay>
                <HStack>
                    <Box style={styles.icon}>
                        {icon}
                    </Box>
                    <Text>{dashboard}</Text>
                </HStack>
            </LinkOverlay>
        </LinkBox>
    );
}

export default SidebarLink;