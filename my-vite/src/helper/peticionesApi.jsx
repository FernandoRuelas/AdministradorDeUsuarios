import React, {useContext, useState} from 'react';
import axios from 'axios';
import { useCrudUser } from '../components/APP2/formulario/useCrudUser';
import ActualizacionContext from '../components/APP2/hooks/contextUsers';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


export const Peticiones =()=>{

  //Variables a utulizar
  const [loginIncorrecto, setLoginIncorrecto] = useState(false);
  const {
    dataToSearch,
    setRedirectToUser,
    users, 
    setUsers, 
    actulizacion, 
    setActulizacion,
    setDatosEdit,
    setNoEncontrado,
    noEncontrado
  }=useContext(ActualizacionContext);
  const [limpiar, setLimpiar] = useState(false);
  const navigateTo  =useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['my-cookie']);

  //funciones que interatuan con la api
  const ValidacionLogin = async(form)=>{

    try{
      const response = await axios.get('http://localhost:3000/personas')
      if (response) {
        const usuario = response.data.find(u => u.email === form.email);
        if (usuario && usuario.password === form.password) {
           setRedirectToUser(true)
           setCookie('my-cookie', usuario, { expires: new Date(Date.now() + 2000) })
           navigateTo('/Usuarios/tablaUser')
        } else {
          setLoginIncorrecto(true)
        }
      }
    }catch(error){
      console.error(error);
    }
  
  }

  const PostDatos = async(form)=>{

    //buscamos si existe el correo
    let correoRegistrado=true;
    try{
      const response = await axios.get('http://localhost:3000/personas')
      if (response) {
        const usuario = response.data.find(u => u.email === form.email);

        if (usuario) {
          alert("El correo ya esta registrado");
          correoRegistrado=false;
         setLimpiar(!limpiar)

        }
      }

    }catch(error){
      console.error(error);
    }

    //registramos el correo
    if (correoRegistrado) {

      try {
        const now= new Date()
        const idNow= now.getSeconds();
        const ids= idNow.toString()
        const response = await axios.post('http://localhost:3000/personas',{
          id: ids,
          email: form.confirmEmail,
          nombre: form.nombre,
          telefono: form.telefono, 
          password: form.password
        })
        if (response) {
          alert("Se agrego correctamente")
          setLimpiar(!limpiar)
          setActulizacion(!actulizacion);
        }
      } catch (error) {
        console.error(error);
      }
    }
    
  }

  const GetDatos = async()=>{
    axios.get('http://localhost:3000/personas')
    .then(response => {
      //validamos si el usuario esta haciendo una busqueda
      if (dataToSearch) {
       const usuarios = response.data.filter(user => user.nombre.toLowerCase().includes(dataToSearch))
       console.log(usuarios)
       if (usuarios.length >=1) {
         setUsers(usuarios)
       }else{
         setUsers(response.data)
        }
      }else{
        setUsers(response.data)

      }
    })
    .catch(error => {
      console.error(error);
    });
  }

  const updateUser = async(form)=>{
    try {
      const respuesta=await axios.put(`http://localhost:3000/personas/${form.id}`,{
        id: form.id,
        email: form.email,
        nombre: form.nombre,
        telefono: form.telefono, 
        password: form.password
      });
      setLimpiar(!limpiar);
      setActulizacion(!actulizacion);
    } catch (error) {
      console.log(error);
    }
  }

  const GetUserToEdit = async(id)=>{
    try{
      const response = await axios.get('http://localhost:3000/personas')
      console.log(response)
      if (response) {
        const usuario = response.data.find(u => u.id == id);
        if (usuario) {
          setDatosEdit(usuario)
          setNoEncontrado(false)
         
        } else {
          console.log(noEncontrado)
          setNoEncontrado(true)
          setLimpiar(!limpiar)
        }
      }
    }catch(error){
       console.error(error);
    }
  }

  const DeleteUser = async(id)=>{
    try {
      const respuesta = axios.delete(`http://localhost:3000/personas/${id}`)
      if (respuesta) {
        alert("El usuario se elimino correctamente")
        setActulizacion(!actulizacion);
      }else{
        alert("El usuario no existe")
      }
    } catch (error) {
      
    }
  }

  //Retornacion de funciones y variables
  return{
  GetDatos, 
  PostDatos, 
  ValidacionLogin, 
  loginIncorrecto, 
  setLoginIncorrecto,
  limpiar,
  updateUser,
  GetUserToEdit,
  DeleteUser
  }

}