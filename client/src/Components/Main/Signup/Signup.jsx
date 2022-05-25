import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Signup() {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [response, setResponse] = useState();

  const navigate = useNavigate();

  const onSubmit = values => {
    fetchSignup(values.email, values.password);
    reset();

  }
  // fetch del signup
  const fetchSignup = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        email: email,
        password: password
      });
      if (response.status === 201) {
        setResponse("true");
        return setTimeout(() => {
          navigate('/tickets')
        }, 2000);
      }
      setResponse("false")
    }
    catch (error) {
      setResponse(await error);
    }
  }
  
  return (
    <div className='signup'>
      <section className='login'>
        <form onSubmit={handleSubmit(onSubmit)} className="login__form">
          <div className='login__icon' />
          <h1 className='login__title'>Crea una cuenta</h1>
          <label className='login__label'>Usuario</label>
          <input placeholder="Email" type="email" className="login__input"
            {...register("email", { required: true, pattern: /^[\w\-\.]+@[\w\-\.]+\.[a-z]{2,4}$/gi })} />
          {errors.email?.type === 'pattern' && <p>Formato incorrecto.</p>}
          <label className='login__label'>Contraseña</label>
          <input placeholder="Contraseña" type="password" className="login__input"
            {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.:\-_,;+*/\\=])[A-Za-z\d@$!%*?&.:\-_,;+*/\\=]{8,50}$/g })} />
          {errors.password?.type === 'pattern' && <p>Formato incorrecto.</p>}
          {response === "true" && <p className='login__response-true'>Usuario registrado.</p>}
          {!response === "false" && <p className='login__response-false'>Usuario registrado.</p>}
          <div className='login__noAccount'><p>¿Ya tienes cuenta?</p><Link to="/login">Accede</Link></div>
          <button className="login__button" type="submit">Crear</button>
        </form>
      </section>
    </div>
  )
}