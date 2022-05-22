import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Login() {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [response, setResponse] = useState();
  
const onSubmit = values => {
  fetchLogin(values.email, values.password);
  reset();
    setTimeout(() => {
      window.location = '/tickets';
    }, 2000);
}
  // fetch del login
  const  fetchLogin = async (email, password) =>{
    try{
        const response = await axios.post('http://localhost:5000/api/login', {
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
      <h1 className='page__title'>LOGIN</h1>
      {response?.message?<p>{response.message}</p>: null}
      {response?.user?<p>{response.user}</p>: null}
    <form onSubmit={handleSubmit(onSubmit)} className="login__form">
      <input placeholder="Email" type="email" className="login__input"      
        {...register("email", {
          required: "Required",
        })}/>
        <input  placeholder="Contraseña" type="password" className="login__input"      
        {...register("password", {
          required: "Required",
        })}/>
      <button className="login__button" type="submit">Login</button>
    </form>
    <a href="/signup"><button className="login__button" type="submit">Signup</button></a>
    {errors.email?.type?<p>El formato email no es correcto. Ejemplo: nombreapellido@gmail.com</p>: null}
    </section>
  )
}
