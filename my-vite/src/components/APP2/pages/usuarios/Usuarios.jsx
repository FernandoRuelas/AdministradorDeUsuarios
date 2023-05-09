import React, { useState } from 'react';
import FormularioAddUser from '../../formulario/FormularioAddUser';
import TablaUser from '../../tabla/TablaUsers';
import './usuarios.css';
import NavBar from '../../navBar/NavBar';
import { ActualizacionProvider } from '../../hooks/contextUsers';
import Menu from '../../menu/Menu';
import Buscador from '../../buscadorUser/buscador';
import { Route, Routes } from 'react-router-dom';
import TablaProyecto from '../../tablaProyectos/TablaProyectos';
import { useCookies } from 'react-cookie';

function Usuarios() {
	const [visibilityUserConfig, setVisibilityUserConfig] = useState(false);
	const [visibilityMenu, setVisibilityMenu] = useState(false);
	const [cookies] = useCookies(['my-cookie']);
	return (
		<>
			<div className="wrapen">
				<ActualizacionProvider>
					<NavBar
						setVisibilityUserConfig={setVisibilityUserConfig}
						visibilityUserConfig={visibilityUserConfig}
						visibilityMenu={visibilityMenu}
						setVisibilityMenu={setVisibilityMenu}
					/>

					<div className="d-flex justify-content-between wrapen-usuarios ">
						<Menu visibilityMenu={visibilityMenu} />

						<div className="d-flex flex-column wrapen-informacion">
							<Routes>
								<Route path="/tablaProyecto"  element={cookies['my-cookie'] ? <TablaProyecto /> : <Navigate to="/" />} />
								<Route path="/tablaUser" element={<TablaUser />} />
							
							</Routes>
							
							
						</div>

						<FormularioAddUser visibilityUserConfig={visibilityUserConfig} />
					</div>
				</ActualizacionProvider>
			</div>
		</>
	);
}

export default Usuarios;
