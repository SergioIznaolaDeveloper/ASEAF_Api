import React, {useState} from 'react'
import { useForm } from "react-hook-form";
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
      const response = await axios.post('/api/signup', {
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
  <h1 className='page__title'>SIGNUP</h1>
      {response?.message?<p>{response.message}</p>: null}
    <form onSubmit={handleSubmit(onSubmit)} className="login__form">
      <input placeholder="Usuario" type="email" className="login__input"      
        {...register("email", {
          required: "Required",
        })}/>
      <input  placeholder="Contraseña" type="password" className="login__input"      
      {...register("password", {
        required: "Required",
      })}/>
      <button className="login__button" type="submit">Signup</button>
    </form>
    <a href="/login"><button className="login__button" type="submit">Login</button></a>
    </section>
  )
}