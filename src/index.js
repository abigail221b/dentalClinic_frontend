import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PatientsDasboard from "./pages/PatientsDashboard";
import PatientDetail from "./pages/PatientDetail";
import AppointmentsDashboard from './pages/AppointmentsDashboard';
import DentistsDashboard from "./pages/DentistsDashboard";
import Dashboard from './pages/Dashboard';
import NewPatientForm from './pages/NewPatientForm';
import NewDentistForm from './pages/NewDentistForm';

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} >
						<Route path="" element={<Dashboard />}/>
						<Route path="patients" element={<PatientsDasboard />} />
						<Route path="patients/:id" element={<PatientDetail />} />
						<Route path="patients/new" element={<NewPatientForm />} />
						<Route path="dentists" element={<DentistsDashboard />} />
						<Route path="dentists/new" element={<NewDentistForm />} />
						<Route path="appointments" element={<AppointmentsDashboard />}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
