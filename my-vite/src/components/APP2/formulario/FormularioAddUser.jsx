import React, { useState, useEffect, useContext } from 'react';
import './FormularioAddUser.css';
import { useCrudUser } from './useCrudUser';
import ActualizacionContext from '../hooks/contextUsers';
import { Peticiones } from '../../../helper/peticionesApi';

function FormularioAddUser({ visibilityUserConfig }) {
	const [addUser, setAddUser] = useState(true);
	const [editUser, setEditUser] = useState(false);
	const [deleteUser, setDeleteUser] = useState(false);
	const { handelSubmitSearch, errores, handelChange, form, setForm, handelSubmit, onBur, handelSubmitEdit,handelChangeDelete, handelSubmitDelete } =
		useCrudUser();
	const { actulizacion,noEncontrado, setActulizacion,datosEdit,tema } = useContext(ActualizacionContext);
	

	useEffect(() => {
		setForm(datosEdit)
	}, [datosEdit]);

	return (
		<>
			<div
				className={
					'd-flex flex-column bg-dark wrapen-formulario' +
					(visibilityUserConfig ? ' wrapen-formulario-in' : ' wrapen-formulario-out') +(tema=="light" ? " light" : "")
				}>
				<div className="p-0 mb-3 mt-5 d-flex justify-content-center">
					<span
						className={'material-symbols-outlined icono' + (addUser ? ' iconoSeleccionado' : '')}
						onClick={() => {
							setAddUser(true);
							setEditUser(false);
							setDeleteUser(false);
						}}>
						person_add
					</span>

					<span
						className={'material-symbols-outlined icono' + (editUser ? ' iconoSeleccionado' : '')}
						onClick={() => {
							setEditUser(true);
							setAddUser(false);
							setDeleteUser(false);
						}}>
						person_remove
					</span>

					<span
						className={'material-symbols-outlined icono' + (deleteUser ? ' iconoSeleccionado' : '')}
						onClick={() => {
							setEditUser(false);
							setAddUser(false);
							setDeleteUser(true);
						}}>
						person_remove
					</span>
				</div>

				{addUser && (
					<>
						<label className="fs-3 p-2 fw-bold text-success mb-3 titulo-user-menu">NEW USER</label>
						<form className="d-flex flex-column mt-1 p-2 formularios" onSubmit={handelSubmit}>
							<input
								type="email"
								className="mb-0 inputs-formulario-addUser"
								name="email"
								onChange={handelChange}
								value={form.email}
								onBlur={onBur}
							
							/>
							<label className="form-text mt-0 mb-2 text-success">Correo electronico</label>

							{errores.email && <p className="text-warning">{errores.email}</p>}

							<input
								type="email"
								className="mb-0 inputs-formulario-addUser"
								name="confirmEmail"
								onChange={handelChange}
								value={form.confirmEmail}
								onBlur={onBur}
							
							/>
							<label className="form-text mt-0 text-success">Confirme el correo electronico</label>

							{errores.datosNoIguales && <p className="text-warning">{errores.datosNoIguales}</p>}

							<input
								type="password"
								className="mb-0 inputs-formulario-addUser"
								name="password"
								onChange={handelChange}
								value={form.password}
								onBlur={onBur}
								
							/>
							<label className="form-text mt-0 text-success">Password</label>

							{errores.password && <p className="text-warning">{errores.password}</p>}

							<input
								type="password"
								className="mb-0 inputs-formulario-addUser"
								name="confirmPassword"
								onChange={handelChange}
								value={form.confirmPassword}
								onBlur={onBur}
								
							/>
							<label className="form-text mt-0 text-success">Confirme el password</label>

							{errores.passwordIguales && <p className="text-warning">{errores.passwordIguales}</p>}

							<input
								type="text"
								className="mb-0 inputs-formulario-addUser"
								name="nombre"
								onChange={handelChange}
								value={form.nombre}
								onBlur={onBur}
								
							/>
							<label className="form-text mt-0 text-success">Nombre</label>

							<input
								type="tel"
								className="mb-0 inputs-formulario-addUser"
								name="telefono"
								onChange={handelChange}
								value={form.telefono}
								onBlur={onBur}
								
							/>
							<label className="form-text mt-0 text-success">Telefono</label>

							<div className="d-flex justify-content-end mt-4">
								<input type="submit" className="btn btn-success col-6" />
							</div>
						</form>
					</>
				)}

				{deleteUser && (
					<>
						<label className="fs-3 p-2  fw-bold text-success mb-3 titulo-user-menu">
							DELETE USER
						</label>
						<form className="d-flex flex-column mt-1 p-3 formularios" onSubmit={handelSubmitDelete}>
							<input type="text" className="mb-0 inputs-formulario-addUser" name='idDelete' value={form.idDelete} onChange={handelChangeDelete} />
							<label className="form-text mt-0 mb-5 text-success">ID del usuairo a eliminar</label>

							<div className="d-flex justify-content-end mt-4">
								<input type="submit" className="btn btn-success col-6" />
							</div>
						</form>
					</>
				)}

				{editUser && (
					<>
						<label className="fs-3 p-2  fw-bold text-success mb-3 titulo-user-menu">
							EDIT USER
						</label>
						<form onSubmit={handelSubmitSearch} className='form-edit'>
							<div className="d-flex justify-content-between mb-4">
								<div className="d-flex flex-column align-items-center">
									<input
										type="text"
										id="IdEdit"
										className="mb-0 inputs-formulario-idEditUsers"
										name="idToEdit"
										onChange={handelChange}
										value={form.idToEdit}
									/>
									<label className="form-text mt-0 mb-5 text-success" htmlFor="IdEdit">
										ID a editar
									</label>
								</div>

								<div className=" ms-1 ">
									<input type="submit" value="Search" className="btn btn-success col-11" />
								</div>
							</div>

							{noEncontrado && <p className='text-warning'>Usuario no encontrado</p>}
						</form>

						<form className="d-flex flex-column mt-1 p-3 formularios" onSubmit={handelSubmitEdit}>
							<input
								type="email"
								className="mb-0 inputs-formulario-addUser"
								name="email"
								onChange={handelChange}
								value={form.email}
								onBlur={onBur}
							/>
							<label className="form-text text-success mt-0 mb-2">Correo electronico</label>

							{errores.email && <p className="text-warning">{errores.email}</p>}

							<input
								type="email"
								className="mb-0 inputs-formulario-addUser"
								name="confirmEmail"
								onChange={handelChange}
								value={form.confirmEmail || form.email}
								onBlur={onBur}
							/>
							<label className="form-text mt-0 text-success">Confirme el correo electronico</label>

							{errores.datosNoIguales && <p className="text-warning">{errores.datosNoIguales}</p>}

							<input
								type="password"
								className="mb-0 inputs-formulario-addUser"
								name="password"
								onChange={handelChange}
								value={form.password}
								onBlur={onBur}
							/>
							<label className="form-text mt-0 text-success">Password</label>

							{errores.password && <p className="text-warning">{errores.password}</p>}

							<input
								type="password"
								className="mb-0 inputs-formulario-addUser"
								name="confirmPassword"
								onChange={handelChange}
								value={form.confirmPassword || form.password}
								onBlur={onBur}
							/>
							<label className="form-text mt-0 text-success">Confirme el password</label>

							{errores.passwordIguales && <p className="text-warning">{errores.passwordIguales}</p>}

							<input
								type="text"
								className="mb-0 inputs-formulario-addUser"
								name="nombre"
								onChange={handelChange}
								value={form.nombre}
								onBlur={onBur}
							/>
							<label className="form-text mt-0 text-success">Nombre</label>

							<input
								type="tel"
								className="mb-0 inputs-formulario-addUser"
								name="telefono"
								onChange={handelChange}
								value={form.telefono}
								onBlur={onBur}
							/>
							<label className="form-text mt-0 text-success">Telefono</label>


							<div className="d-flex justify-content-end mt-4">
								<input type="submit" className="btn btn-success col-6" />
							</div>
						</form>
					</>
				)}
			</div>
		</>
	);
}

export default FormularioAddUser;
