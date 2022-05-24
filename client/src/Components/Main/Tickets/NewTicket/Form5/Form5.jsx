import React, {useContext} from 'react'
import { useForm } from "react-hook-form";
import { Post } from '../../../../../Context/Post';

export default function Form5() {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const {formResult, setFormResult} = useContext(Post);


  console.log(formResult);
  const onSubmit2 = values => {
    setFormResult([...formResult, values]);
    reset();
  }
  return (
  <form className='newTicket__form' onSubmit={handleSubmit(onSubmit2)}>
    <div className='newTicket__input-container-radio'>
        <label className="newTicket__label">¿Estas Aociado?</label>
        <div>
          <input className="newTicket__input-radio" {...register("asociado")} type="radio" id="mujer" name="asociado" value="true"
                checked/>
          <label >Si</label>
        </div>
        <div>
          <input className="newTicket__input-radio" {...register("asociado")} type="radio" id="hombre" name="asociado" value="false"/>
          <label >No</label>
        </div>
    </div>
  <button className="login__button" type='submit'>SIGUIENTE</button>
    </form>
  )
}
