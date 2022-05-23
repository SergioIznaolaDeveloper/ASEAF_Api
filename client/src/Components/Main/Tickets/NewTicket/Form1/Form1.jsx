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
    <label className="newTicket__label">Nº de miembros</label>
    <select placeholder='asdasdasdasd'{...register("miembros", { required: true})}>
        <option value="1">1 miembro</option>
        <option value="2">2 miembros</option>
    </select>
    <label className="newTicket__label">Tipo de familia</label>
    <select {...register("tipo", { required: true})}>
        <option value="asociadas">Familias acogedoras asociadas (pagan cuota)</option>
        <option value="noAsociadas">Familias acogedoras sin ser asociada</option>
        <option value="potenciales">Familias potenciales que no han empezado el proceso</option>
        <option value="denegadas">Familias denegadas</option>
    </select>
    <button className="login__button" type='submit'>Siguiente</button>
    </form>
  )
}
