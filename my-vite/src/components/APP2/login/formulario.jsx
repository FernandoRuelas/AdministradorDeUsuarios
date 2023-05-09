import React, {useState, useRef, useEffect} from 'react';
import { useForm } from '../hooks/useform';
import './formulario.css'

const Formulario = () => {

  const [verPassword, setVerPassword] = useState(false);
  const { handelChange, handelSubmit, handelBur, form, errores,loginIncorrecto, email, password, handelFocusEmail, handelFocusPassword }= useForm();

  return (
    
    <div className='d-flex align-items-center wrapen'>

      <img src="https://placeimg.com/900/657/people"/>

      <form className='display-flex p-5 align-self-end'
      onSubmit={handelSubmit}
      >

      <div className=''>
        {loginIncorrecto && <p className='fs-5 fw-bold text-danger text-center'>Correo o contraseña incorrectos</p>}
      </div>

        <label  className="fs-1 fw-bold text-success mt-5 mb-5" >Login</label>

        <div className='mb-3 contenedor-input'>
        
         <label className={email ? 'label-login-animacion' : 'label-login'}>      Email</label>
          
         <input
          className="inputs" 
          type="email" 
          name="email"
          onFocus={handelFocusEmail}
          onChange={handelChange}
          onBlur={handelBur}
          value={form.email} /> 
        </div>

        {errores.email && <p className='text-warning'>{errores.email}</p>} 

        <div className='contenedor-input'>
          <label  className={password ? 'label-login-animacion' : 'label-login'}>Password</label>
          
          <input 
            className="inputs " 
            type={verPassword ? "text" : "password"} 
            name="password"
            onFocus={handelFocusPassword}
            onBlur={handelBur}
            onChange={handelChange}
            value={form.password}/> 

          {password && <span className={"material-symbols-outlined " + (password ? "iconoVer-on" : "iconoVer-off")} 
          onMouseUp={()=>setVerPassword(false)}
          onMouseDown={()=>setVerPassword(true)}>
            visibility_off
          </span>}

        </div>

        {errores.password && <p className='text-warning'>{errores.password}</p>} 

        <div className='d-flex justify-content-end'>
        <input 
          className='col-md-6 col-sm-3 col-lg-4  btn btn-success mt-5' 
          type="submit" 
          value="Login" />
        </div>
      </form>
    </div>
   


    );
}
 
export default Formulario;