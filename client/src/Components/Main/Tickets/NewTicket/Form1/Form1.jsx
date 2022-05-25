import React, {useContext} from 'react'
import { useForm } from "react-hook-form";
import { Post } from '../../../../../Context/Post';

export default function Form1() {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const {formResult, setFormResult} = useContext(Post);
  console.log(formResult);
  const onSubmit1 = values => {
    setFormResult([values]);
    reset();
  }
  return (
    <form className='newTicket__form' onSubmit={handleSubmit(onSubmit1)}>
       <div className='newTicket__input-container-radio'>
        <label className="newTicket__label">Número de miembros</label>
        <div>
          <input className='newTicket__input-radio' {...register("miembros")} type="radio" id="mujer" name="miembros" value="1"
                checked/>
          <label className='newTicket__label-radio'> 1</label>
        </div>
        <div>
          <input className='newTicket__input-radio' {...register("miembros")} type="radio" id="hombre" name="miembros" value="2"/>
          <label className='newTicket__label-radio'> 2</label>
        </div>
    </div>
    <label className="newTicket__label">Tipo de familia</label>
    <select {...register("tipo", { required: true})}>
        <option value="asociadas">Familias acogedoras asociadas</option>
        <option value="noAsociadas">Familias acogedoras sin ser asociada</option>
        <option value="potenciales">Familias potenciales que no han empezado el proceso</option>
        <option value="denegadas">Familias denegadas</option>
    </select>
    <button className="login__button" type='submit'>Siguiente</button>
    </form>
  )
}
