import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Signup() {
  const { handleSubmit, register, reset} = useForm();
  const [response, setResponse] = useState();
  const onSubmit = values => {
    fetchSignup(values.email, values.password);
    reset();
    setTimeout(() => {
      window.location = '/';
    }, 2000);
  }
// fetch del signup
const  fetchSignup = async (email, password) =>{
  try{


      const response = await axios.post('http://localhost:5000/api/signup', {


          email: email,
          password: password
        });
      setResponse(await response.data);
      return response.data;
  }
  catch(error){
    setResponse(await error);
  }
}
return (
<div className='signup'>
<section className='login'>
<form onSubmit={handleSubmit(onSubmit)} className="login__form">
    <div className='login__icon'/>
    <h1 className='login__title'>Crea una cuenta</h1>
      <label className='login__label'>Usuario</label>
      <input placeholder="Email" type="email" className="login__input"      
        {...register("email", {
          required: "Required",
        })}/>
      <label className='login__label'>Contraseña</label>
      <input  placeholder="Contraseña" type="password" className="login__input"      
        {...register("password", {
          required: "Required",
        })}/>
      <div className='login__noAccount'><p>¿Ya tienes cuenta?</p><Link to="/">Accede</Link></div>
      <button className="login__button" type="submit">Crear</button>
    </form>
    </section>
    </div>
  )
}