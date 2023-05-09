import React from 'react';
import './buscador.css';
import { useBuscadorUser } from './useBuscadorUser';

function Buscador() {
	const { handelChange, handelSubmit, nombre } = useBuscadorUser();

	return (
		<>
			<div className='d-flex justify-content-end mb-2 wrapen-buscador-usuario'>

				<div className="wrapen-buscador  mb-2">
					<form onSubmit={handelSubmit}>
						<input
							className="input-buscador"
							type="text"
							placeholder="Buscar..."
							onChange={handelChange}
							value={nombre}
						/>
						<div className="btn-buscador" onClick={handelSubmit}>
							<span class="material-symbols-outlined">search</span>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Buscador;
