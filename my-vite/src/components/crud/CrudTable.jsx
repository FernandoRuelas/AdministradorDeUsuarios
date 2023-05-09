import React from 'react';
import CrudTableRow from './CrudTableRow';

export default function Table1({ db, setToEdit, setdatosEdcion, eliminar, editar }) {
	return (
		<>
			<div className='row'>
			<div className='col-md-9 offset-md-2'>
				<table className="table table-hover">
					<thead className='table-light'>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Telefono</th>
							<th>Opciones</th>
						</tr>
					</thead>
					<tbody>
						{db.length == 0 ? 
						(<tr><td>sin datos</td></tr>) : 
						(db.map((elemento)=><CrudTableRow ids={elemento.id} setToEdit={setToEdit} elemento={elemento} editar={editar} setdatosEdcion={setdatosEdcion} eliminar={eliminar}/>)) }
					</tbody>
				</table>
			</div>
			</div>
		</>
	);
}
