import React, { useState } from 'react';
import { Peticiones } from '../../../helper/peticionesApi';

const initialForm={
  email:'',
  password:''
}

export const useForm =()=>{

  //bariables de estadoa  utilizar
  const [form, setForm] = useState(initialForm);
  const [login, setLogin] = useState(false);
  const [errores, setErrores] = useState([]);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

  //destructuracion de peticiones
  const  {ValidacionLogin, PostDatos, loginIncorrecto, setLoginIncorrecto}  = Peticiones()

  const handelChange=(e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

    // if (form.email) {
    //   validacionesEmail(e);
    //   console.log(errores)
    // }
    // if (form.password) {
    //   validacionesPassword(e)
    //   console.log(errores)
    // }

     validaciones(e)

    setLoginIncorrecto(false)
   
  };
  
  const validacionesEmail=(e)=>{

    let errorEmail={}
     const regexEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    if(!regexEmail.test(form.email.trim())){
      errorEmail.email='introdusca un correo valido'
   
      }

    if (Object.keys(errorEmail).length === 0) {
      setLoginEmail(true);
    }else{
      setLoginEmail(false);
    }
    setErrores(errorEmail);

    
  };

  const validacionesPassword=(e)=>{

    let errorPassword={}
    const regex = /^(?=.{7,15}$)(?!\s)[a-zA-Z0-9]+$/;

    if(!regex.test(form.password.trim())){
    errorPassword.password='8 Caracteres como minimo, 15 como maximo y sin espasios en blanco'
   
    }

    if (Object.keys(errorPassword).length === 0) {
      setLoginPassword(true);
    }else{
      setLoginPassword(false);
    }
     setErrores(errorPassword);

    
  };

  const validaciones=(e)=>{
    
    let error={}

    if (form.email) {
      const regexEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
 
     if(!regexEmail.test(form.email.trim())){
       error.email='introdusca un correo valido'
       
       }
 
      
    }

    if (form.password) {
      const regex = /^(?=.{7,15}$)(?!\s)[a-zA-Z0-9]+$/;

      if(!regex.test(form.password.trim())){
      error.password='8 Caracteres como minimo, 15 como maximo y sin espasios en blanco'
      
      }

    }

    setErrores(error);

    if (Object.keys(error).length === 0) {
      setLogin(true);
    
    }else{
      setLogin(false);
    }

  };

  const handelSubmit=(e)=>{
    e.preventDefault()
    
    if (login) {
      ValidacionLogin(form)
    }
  }

  //metodos para las animaciones del focus y el bur
  const handelFocusEmail=()=>{
    setEmail(true)
  }

  const handelFocusPassword=()=>{
    setPassword(true)
  }

  const handelBur=()=>{
    if (!form.email) {
      setEmail(false)
    }
    if (!form.password) {
      setPassword(false)
    }
  }

 //retornacion de datos y metodos
  return{

    handelChange,
    handelSubmit,
    handelBur,
    form,
    errores,
    loginIncorrecto,
    email,
    password,
    handelFocusPassword,
    handelFocusEmail
    
  }
}