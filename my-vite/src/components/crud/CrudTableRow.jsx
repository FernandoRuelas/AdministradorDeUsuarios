import React from 'react';

export default function CrudTableRow({ ids, editar, setToEdit, elemento, setdatosEdcion, eliminar }) {
	
	let {nombre, telefono,id}=elemento;

	const editarDatos=()=>{
			setdatosEdcion(elemento)
			setToEdit(true)
	}
	
	return (

		<tr key={ids}>
			<td>{elemento.id}</td>
			<td>{elemento.nombre}</td>
			<td>{elemento.telefono}</td>
			<td>
				<button className='btn btn-info' onClick={()=>editarDatos()}>Editar</button>
				<button className='btn btn-danger ms-2' onClick={()=>eliminar(elemento.id)}>Eliminar</button>
			</td>
		</tr>
	);
}
