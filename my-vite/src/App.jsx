import './App.css';
import Usuarios from './components/APP2/pages/usuarios/Usuarios';
import Formulario from './components/APP2/login/formulario';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ActualizacionProvider } from './components/APP2/hooks/contextUsers';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import { Tab } from 'react-bootstrap';
import TablaUser from './components/APP2/tabla/TablaUsers';

function App() {
	
	const [cookies] = useCookies(['my-cookie']);

	return (
		<div>

			<Router>
				<ActualizacionProvider>
					<Routes>
						<Route path="/" element={<Formulario />} />

						<Route
							path="/Usuarios/*"
							element={cookies['my-cookie'] ? <Usuarios /> : <Navigate to="/" />}
						>
							

						
						</Route>
					</Routes>
				</ActualizacionProvider>
			</Router>
		</div>
	);
}

export default App;
