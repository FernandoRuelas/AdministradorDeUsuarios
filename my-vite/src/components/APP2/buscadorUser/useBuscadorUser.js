import React, {useContext, useState} from 'react';
import ActualizacionContext from '../hooks/contextUsers';

export function useBuscadorUser() {

  const [nombre, setNombre] = useState("");
  const {dataToSearch, setDataToSearch, setActulizacion,actulizacion}=useContext(ActualizacionContext)
  
  const handelChange = (e) =>{
    setNombre(e.target.value);
    setDataToSearch(nombre);
    setActulizacion(!actulizacion);
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    setDataToSearch(nombre);
    setActulizacion(!actulizacion);
    console.log(dataToSearch)
  
  }

  return { 
    handelChange,
    handelSubmit,
    nombre
   };
}
