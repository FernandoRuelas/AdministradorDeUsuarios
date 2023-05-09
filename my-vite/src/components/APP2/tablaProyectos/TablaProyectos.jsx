import React, { useContext, useEffect } from 'react';
import { Peticiones } from '../../../helper/peticionesApi';
import ActualizacionContext from '../hooks/contextUsers';

function TablaProyectos() {
	const { GetDatos } = Peticiones();
	const { actulizacion, setActulizacion, users, tema } = useContext(ActualizacionContext);

	useEffect(() => {
		GetDatos();

		console.log('entra al useEffect');
	}, [actulizacion]);
	return (
		<>
		
			<h1 className='text-warning fs-1'>Esta ventana aun no esta habilitada</h1>
			<div className="wrapen-table shadow rounded p-1">
				<table className={`table table-${tema} table-striped rounded`}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Integrantes</th>
							<th>Fecha de inicio</th>
						</tr>
					</thead>

					<tbody>
			
					</tbody>
				</table>
			</div>
		</>
	);
}

export default TablaProyectos;
