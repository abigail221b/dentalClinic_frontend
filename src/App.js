import Sidebar from "./components/Sidebar";

import { Flex } from "@chakra-ui/layout";
import { Outlet } from "react-router";

function App() {
	return (
		<div className="App">
			<Flex>
				<Sidebar />
				<Outlet />
			</Flex>
		</div>
	);
}

export default App;
