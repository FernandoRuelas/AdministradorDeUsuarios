import React, { useState } from 'react';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Looker from '../looker'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialDb = [
  {
    id:2,
    nombre: "Juan",
    telefono: "6221545875",
  },
  {
    id:1,
    nombre: "fernando",
    telefono: "6221562893",
  }
]

export default function CrudApp() {

  const [db, setDb] = useState(initialDb);
  const [datosEdicion, setdatosEdcion] = useState(null);
  const [toEdit, setToEdit] = useState(false);
 
  const agregar=(data)=>{
    data.id= Date.now()
    setDb([...db, data]);
  }

  const editar=(elemento)=>{
      const newDB= db.map(el=>el.id === elemento.id ? el=elemento : el);
      setDb(newDB);
  }

  const eliminar=(id)=>{
    
    let confirm = window.confirm(`¿Estas seguro de eliminar el usuario con el ID: ${id}`);

    if (confirm) {
      const newDb=db.filter(el=>el.id !== id);
      setDb(newDb);  
    }else{
      return;
    }
  }

  return ( 
    <>
      <CrudForm  toEdit={toEdit} agregar={agregar} datosEdicion={datosEdicion} editar={editar} eliminar={eliminar}/>
      <CrudTable db={db} setToEdit={setToEdit} setdatosEdcion={setdatosEdcion} editar={editar} eliminar={eliminar}/>
{/*     
      <Looker/> */}
    </>

   );
}