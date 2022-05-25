import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [responseFetch, setResponseFetch] = useState();

const navigate = useNavigate();

const onSubmit = async values => {
  await fetchLogin(values.email, values.password);
  
}
  // fetch del login
const  fetchLogin = async (email, password) =>{
  try{
    const response = await axios.post('http://localhost:3001/api/login', {
        email: email,
        password: password
    });
    setResponseFetch(response.data);
    if (response.status === 200){
      console.log(response)
      setTimeout(() => {
        reset();
        navigate('/tickets');
      }, 2000);
    }
  }
  catch(error){
    setResponseFetch(await error);
    setTimeout(() => {
      reset();
      navigate('/');
    }, 2000);
  }
}
  return (
    <div className='home'>
    <section className='login'>
    <form onSubmit={handleSubmit(onSubmit)} className="login__form">
    <div className='login__icon'/>
    <h1 className='login__title'>Acceder a tu cuenta</h1>
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
      {responseFetch?.user?<p className='login__response-true'>Usuario {responseFetch.user} logeado con éxito</p>: null}
      {responseFetch?.message === "Request failed with status code 401" ? <p className='login__response-false'>Usuario o contraseña no válidas</p>: null}
      <div className='login__noAccount'><p>¿No tienes cuenta?</p><Link to="/signup">Regístrate</Link></div>
      <button className="login__button" type="submit">Acceder</button>
    </form>
    {errors.email?.type?<p>El formato email no es correcto. Ejemplo: nombreapellido@gmail.com</p>: null}
    </section>
    </div>
  )
}
