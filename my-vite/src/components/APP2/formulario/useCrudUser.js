import React, {useState, useEffect} from 'react';
import { Peticiones } from '../../../helper/peticionesApi';

const initialValuesForm={
  email: "",
  confirmEmail: "",
  password:"",
  confirmPassword:"",
  telefono: "",
  nombre:""
}

export function useCrudUser() {
  const [errores, setErrores] = useState([]);
  const [addUser, setAddUser] = useState(false);
  const [form, setForm] = useState({});
  const {PostDatos,limpiar,updateUser,GetUserToEdit, DeleteUser}=Peticiones();

  useEffect(() => {
    resetValues();
  }, [limpiar]);
 
  const handelChangeDelete=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  }

  const handelChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
    
    validaciones(e)

  };

  const onBur=(e)=>{
    validaciones(e)
  }
  
  const validaciones=(e)=>{
    
    let error={}

    if (form.email) {
      const regexEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
 
     if(!regexEmail.test(form.email.trim())){
       error.email='introdusca un correo valido'
       
       }
      
    }

    if (form.confirmEmail) {
      if (form.email !== form.confirmEmail) {
        error.datosNoIguales="Los correos deben coincidir";
      }
    }

    if (form.password) {
      const regex = /^(?=.{7,15}$)(?!\s)[a-zA-Z0-9]+$/;

      if(!regex.test(form.password.trim())){
      error.password='8 Caracteres como minimo, 15 como maximo y sin espasios en blanco'
      
      }

    }

    if (form.confirmPassword) {
      if (form.password !== form.confirmPassword) {
        error.passwordIguales="revise su password"
        
      }
    }


    setErrores(error);

    if (Object.keys(error).length === 0) {
      setAddUser(true);
      console.log("entro a verdadero")
      console.log(addUser)
    
    }else{
      setAddUser(false);
      console.log("entro a falso")
    }

  };

  const handelSubmit=(e)=>{
    e.preventDefault()
    
    if (addUser) {
      PostDatos(form);
    }
    setAddUser(false);
  }
  
  const handelSubmitEdit=(e)=>{
    e.preventDefault()

    
    if (addUser) {
      updateUser(form);
    }
    setAddUser(false);
  }

  const handelSubmitSearch =(e)=>{
    e.preventDefault()
    if(form.idToEdit){
      GetUserToEdit(form.idToEdit)
    
    }
  }

  const resetValues =()=>{
    setForm(initialValuesForm)
  }
  
  const handelSubmitDelete=(e)=>{
    e.preventDefault();

    if (form.idDelete.trim()) {
      DeleteUser(form.idDelete.trim());
    }
  }


 
  return {
  
    errores,
    handelChange,
    form, 
    setForm,
    handelSubmit,
    resetValues,
    onBur,
    handelSubmitEdit,
    handelSubmitSearch,
    handelSubmitDelete,
    handelChangeDelete
  
  };

}

