import React, { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { LoginContext } from '../../../Context/Login';

export default function Login() {
  const { handleSubmit, register, reset } = useForm();
  const [responseFetch, setResponseFetch] = useState();
  const { setIsAuthenticated } = useContext(LoginContext);

  const navigate = useNavigate();

  const onSubmit = async values => {
    await fetchLogin(values.email, values.password);

  }
  // fetch del login
  const fetchLogin = async (email, password) => {
    try {
      
      const body = {email: email, password: password};
      const request = await fetch('/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      });
      const response = await request.json();
      setResponseFetch("true");
      if (response.authenticated) {
        setIsAuthenticated(true);
        localStorage.setItem('auth', true);
        setTimeout(() => {
          reset();
          navigate('/tickets');
        }, 2000);
      }
      else if (!response.authenticated) {
        setResponseFetch("false");
      }
    }
    catch (error) {
      setResponseFetch(await error);
    }
  }

  return (

    <div className='signup'>
      <section className='login'>
        <form onSubmit={handleSubmit(onSubmit)} className="login__form">
          <div className='login__icon' />
          <h1 className='login__title'>Acceder a tu cuenta</h1>
          <label className='login__label'>Usuario</label>
          <input placeholder="Email" type="email" className="login__input"
            {...register("email", {
              required: "Required",
            })} />
          <label className='login__label'>Contraseña</label>
          <input placeholder="Contraseña" type="password" className="login__input"
            {...register("password", {
              required: "Required",
            })} />
          {responseFetch === "true" ? <p className='login__response-true'>Usuario logado con éxito</p> : null}
          {responseFetch === "false" ? <p className='login__response-false'>Usuario o contraseña no válidas</p> : null}
          <div className='login__noAccount'><p>¿No tienes cuenta?</p><Link to="/signup">Regístrate</Link></div>
          <button className="login__button" type="submit">Acceder</button>
        </form>
      </section>
    </div>
  )
}
