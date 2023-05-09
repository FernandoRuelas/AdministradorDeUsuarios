import React, { useState } from 'react';
import { useEffect } from 'react';

const initialForm={
  nombre:"",
  telefono:"",
  id: null,
}

export default  function Form({agregar, toEdit, datosEdicion, editar, eliminar}) {

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (datosEdicion) {
      setForm(datosEdicion);
    }else
    setForm(initialForm);
     
  }, [datosEdicion]);

  const handleChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (form.id===null) {
      if (!form.nombre || !form.telefono) {
        alert("llene todos los datos porfavor")
        return;
      }else{
        agregar(form);
      }
      handleReset();
    }else{
      editar(form);
      handleReset();
    }

  };

  const handleReset=(e)=>{
    setForm(initialForm);
  };

  return ( 
    <>

    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className='nav-item'> 
         <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
         </li>
        <li className='nav-item'>
        <a class="nav-link active text-white" aria-current="page" href="#">Opciones</a>
        </li>
        <li className='nav-item'>
        <a class="nav-link active text-white" aria-current="page" href="#">Configuraciones</a>
        </li>
      </ul>
    </nav>

      <div className='' >
        <form class="d-flex flex-row mb-3 mt-3 justify-content-center" onSubmit={handleSubmit}>
          <div className=''>
            <input className="form-control" type="text" placeholder='Nombre' onChange={handleChange} name="nombre" value={form.nombre}></input>
          </div>
          <div  className="">
            <input className="form-control ms-2" type="text" placeholder='telefono' onChange={handleChange} name="telefono" value={form.telefono}></input>
          </div>
          <div className="">
            <button className="btn btn-outline-success ms-3" type="submit">Enviar</button>
          </div>
        </form>
      </div>
 
    </>
   );
}