import React, {useContext} from 'react'
import { useForm } from "react-hook-form";
import { Post } from '../../../../../Context/Post';
const acogimientos =["temporal", "permanente", "urgencia", "especializado"]
export default function Form4() {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const {formResult, setFormResult} = useContext(Post);
  console.log(formResult);
  const onSubmit2 = values => {
    setFormResult([...formResult, values]);
    reset();
  }
  return (
<form className='newTicket__form' onSubmit={handleSubmit(onSubmit2)}>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">¿Has acogido otras veces?</label>
        <input type="text" className="newTicket__input" {...register("acogida", { required: true, minLength: 2})} />
      </div>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">¿Cuántas veces ha acogido?</label>
        <input type="number" className="newTicket__input" {...register("numero_acogida", { required: true, minLength: 1})} />
      </div>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">Tiempo total de acogida:</label>
        <input type="text" className="newTicket__input" {...register("tiempo_acogida", { required: true, minLength: 2})} />
      </div>
      <div className='newTicket__input-container'>
    <label className="newTicket__label">Tipo de acogimiento:</label>
    <select {...register("salario", { required: true})}>
      {acogimientos.map((acogimiento, i) => {
        return(
      <option key={i} value={acogimiento}>{acogimientos[i]}</option>
      )})}
    </select>
  </div>
  {/* AÑADIDO PARA USUARIOS NO POTNECIALES*/}
  {formResult[0].tipo !== "potenciales" ?
    formResult[0].tipo !== "denegadas" ?
    <>
    {/* AÑADIDO PARA USUARIOS NO POTENCIALES Y NO DENEGADAS*/}
    <div className='newTicket__input-container'>
      <label className="newTicket__label">Fecha inicio:</label>
      <input type="date" className="newTicket__input" {...register("fecha_inicio_acogida", { required: true })} />
    </div>
    <div className='newTicket__input-container'>
      <label className="newTicket__label">Fecha de resolución:</label>
      <input type="date" className="newTicket__input" {...register("fecha_resolucion_acogida", { required: true })} />
    </div>
    <div className='newTicket__input-container'>
      <label className="newTicket__label">Fecha de asignación:</label>
      <input type="date" className="newTicket__input" {...register("fecha_asignacion_acogida", { required: true })} />
    </div>
    </>
    :
    <>
    {/* AÑADIDO PARA USUARIOS NO POTENCIALES Y SI DENEGADAS */}
    <div className='newTicket__input-container'>
      <label className="newTicket__label">Fecha inicio:</label>
      <input type="date" className="newTicket__input" {...register("fecha_inicio_acogida", { required: true })} />
    </div>
    <div className='newTicket__input-container'>
      <label className="newTicket__label">Fecha de resolución:</label>
      <input type="date" className="newTicket__input" {...register("fecha_resolucion_acogida", { required: true })} />
    </div>
    </>
    : null}
  <button className="login__button" type='submit'>SIGUIENTE</button>
    </form>
  )
}
