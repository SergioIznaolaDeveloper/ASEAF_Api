import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [response, setResponse] = useState();

  const navigate = useNavigate();
  
const onSubmit = values => {
  fetchLogin(values.email, values.password);
  reset();
    setTimeout(() => {
      navigate('/tickets');
    }, 2000);
}
  // fetch del login
  const  fetchLogin = async (email, password) =>{
    try{
        const response = await axios.post('http://localhost:3001/api/login', {
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
    <section className='login'>
      {response?.message?<p>{response.message}</p>: null}
      {response?.user?<p>{response.user}</p>: null}
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
      <p>¿No tienes cuenta?</p><Link to="/signup">Registrate</Link>
      <button className="login__button" type="submit">Acceder</button>
    </form>
    {errors.email?.type?<p>El formato email no es correcto. Ejemplo: nombreapellido@gmail.com</p>: null}
    </section>
  )
}
