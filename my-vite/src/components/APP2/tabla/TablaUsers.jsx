import React, {useContext, useEffect} from 'react';
import './tabla.css'
import { Peticiones } from '../../../helper/peticionesApi';
 import ActualizacionContext from '../hooks/contextUsers';
import Buscador from '../buscadorUser/buscador';

function TablaUser() {
  
  const {GetDatos}=Peticiones();
  const {actulizacion, setActulizacion, users, tema}=useContext(ActualizacionContext)
  
  useEffect(() => {
    GetDatos()
    
    console.log("entra al useEffect")
  }, [actulizacion]);
    
  
  return (
    
    <>
    <Buscador/>
      <div className="wrapen-table shadow rounded p-1">
        
        <table className={`table table-${tema} table-striped rounded`}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>telefono</th>
              <th>Correo</th>
              
            </tr>
          </thead>

          <tbody>
          
          {users.map((usuario) =>(
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.telefono}</td>
                <td>{usuario.email}</td>
              </tr>
          ))}

          </tbody>
        </table>
      </div>

    </>
   );
}

export default TablaUser;