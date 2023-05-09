import React, { useContext } from 'react';
import './menu.css';
import ActualizacionContext from '../hooks/contextUsers';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

function Menu({ visibilityMenu }) {
	const { tema, handelCambioTema, loGout } = useContext(ActualizacionContext);
	const [cookies] = useCookies(['my-cookie']);


	return (
		<>
			<div
				className={
					`d-flex flex-column justify-content-between bg-dark  wrapen-menu` +
					(visibilityMenu ? ' wrapen-menu-in' : ' wrapen-menu-out') +
					(tema == 'light' ? ' light' : '')
				}>
				<div className="mb-5">
					<h4 className="text-light ">{cookies['my-cookie'] && cookies['my-cookie'].nombre}</h4>
				</div>

				<nav className='navegacion'>
					<ul>
						<Link className="link-no-decor" to={'/Usuarios/tablaUser'}><li>Users</li></Link>
						<Link className="link-no-decor" to={'/Usuarios/tablaProyecto'}><li>Proyects</li></Link>
					</ul>
				</nav>

				<div className="d-flex">
					<span className="material-symbols-outlined iconos">wb_sunny</span>
					<div className="form-check form-switch">
						<input
							className="form-check-input"
							type="checkbox"
							onClick={handelCambioTema}
							id="flexSwitchCheckDefault"
						/>
					</div>
					<span className="material-symbols-outlined iconos">clear_night</span>
				</div>
					<div className='btn-loGout d-flex' onClick={loGout}>
						<span className="material-symbols-outlined">logout</span>
						<input type="submit" value="Lo gout" />
					</div>
			</div>
		</>
	);
}

export default Menu;
