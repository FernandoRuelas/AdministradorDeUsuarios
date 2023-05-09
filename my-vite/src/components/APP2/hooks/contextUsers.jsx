import { createContext } from 'react';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const ActualizacionContext = createContext();

const ActualizacionProvider = ({ children }) => {

	const [users, setUsers] = useState([]);
	const [actulizacion, setActulizacion] = useState(false);
	const [datosEdit, setDatosEdit] = useState({});
	const [noEncontrado, setNoEncontrado] = useState(false);
  //tema oscuro
	const [tema, setTema] = useState('dark');
  //manejo de cookies
	const [redirectToUser, setRedirectToUser] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(['my-cookie']);
	
  const [dataToSearch, setDataToSearch] = useState("");

  const navigateTo = useNavigate();


	const handelCambioTema = () => {
		if (tema === 'dark') {
			setTema('light');
		} else {
			setTema('dark');
		}
	};

	const loGout = () => {
		console.log('hola');
		removeCookie('my-cookie');
		navigateTo('/');
	};

	const data = {
    dataToSearch, 
    setDataToSearch,
		loGout,
		redirectToUser,
		setRedirectToUser,
		tema,
		setTema,
		handelCambioTema,
		actulizacion,
		setActulizacion,
		users,
		noEncontrado,
		setNoEncontrado,
		setUsers,
		datosEdit,
		setDatosEdit,
	};

	return <ActualizacionContext.Provider value={data}>{children}</ActualizacionContext.Provider>;
};

export { ActualizacionProvider };
export default ActualizacionContext;
