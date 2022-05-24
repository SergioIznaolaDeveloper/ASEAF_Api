import React, {useContext} from 'react'
import { useForm } from "react-hook-form";
import { Post } from '../../../../Context/Post';
import Form1 from './Form1/Form1';
import Form2 from './Form2/Form2';
import Form3 from './Form3/Form3';
import Form4 from './Form4/Form4';
import Form5 from './Form5/Form5';
import FormFinal from './FormFinal/FormFinal';
export default function NewTicket() {
  
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const {formResult, setFormResult} = useContext(Post);
  //VARIABLES
const asociaciones  = ["asociación1","asociación2","asociación3"]
// FUNCIONES 
  const onSubmit2 = values => {
    setFormResult([...formResult, values]);
    reset();
  }
// RETURN 
  return <section className="newTicket">
    {/* FORMULARIO PAGINA 1 */}
    {formResult.length === 0 ? 
      <>
      <h1 className='newTicket__title'>Paso 1: Situación familiar</h1>
      <div className='newTicket__progres1'></div>
      <Form1/>
      </> : 
    null}
    {/* FORMULARIO PAGINA 2 */}
    {formResult.length === 1 ? 
      <>
      <h1 className='newTicket__title'>Paso 2. Datos de los miembros</h1>
      <div className='newTicket__progres2'></div>
      <Form2/>
      </>  
    : null}
    {/* FORMULARIO PAGINA 3 */}
    {formResult.length === 2 ?
      <>
      <h1 className='newTicket__title'>Paso 3. Situación profesional</h1>
      <div className='newTicket__progres3'></div>
      <Form3/>
      </> 
    : null}
    {/* FORMULARIO PAGINA 4 */}
    {formResult.length === 3 ? 
      <>
      <h1 className='newTicket__title'>Paso 4. Acogimiento</h1>
      <div className='newTicket__progres4'></div>
      <Form4/>
      </> 
    : null}
    {/* FORMULARIO PAGINA 5 */}
    {formResult.length === 4 ? 
    <>
      <>
      <h1 className='newTicket__title'>Paso 5. Asociaciones</h1>
      <div className='newTicket__progres5'></div>
      <Form5/>
      </> 
    </>: null}
    {/* FORMULARIO PAGINA 6 */}
    {formResult.length === 5 && formResult[4].asociado === "false" ? 
      <>
      <h1 className='newTicket__title'>Paso 5. Asociaciones</h1>
      <div className='newTicket__progres5'></div>
      {/* NO ASOCIADOS */}
      <form className='newTicket__form' onSubmit={handleSubmit(onSubmit2)}>
      <div className='newTicket__input-container-radio'>
        <label className="newTicket__label">¿Te gustaría asociarte?</label>
            <div>
              <input className="newTicket__input-radio" {...register("quiere_asociado")} type="radio" id="mujer" name="quiere_asociado" value="true"
                    checked/>
              <label >Si</label>
            </div>
            <div>
              <input className="newTicket__input-radio"  {...register("quiere_asociado")} type="radio" id="hombre" name="quiere_asociado" value="false"/>
              <label >No</label>
            </div>
        </div>
        <button className="login__button" type='submit'>SIGUIENTE</button>
      </form>
      </>
      :null}
      {/* YA ASOCIADOS */}
      {formResult.length === 5 && formResult[4].asociado === "true" ?
      <>
      <h1 className='newTicket__title'>Paso 5. Asociaciones</h1>
      <div className='newTicket__progres5'></div>
      <form className='newTicket__form' onSubmit={handleSubmit(onSubmit2)}>
        <div className='newTicket__input-container'>
          <label className="newTicket__label">Asociación:</label>
          <select {...register("asociacion", { required: true})}>
            {asociaciones.map((asociacion, i) => {
              return(
              <option key={i} value={asociacion}>{asociaciones[i]}</option>
              )})}
          </select>
        </div>
        <button className="login__button" type='submit'>SIGUIENTE</button>
      </form>
      </>
      :null}
  {formResult.length === 6 && formResult[5].quiere_asociado === "true" ?
    <>
    <h1 className='newTicket__title'>Paso 5. Asociaciones</h1>
    <div className='newTicket__progres5'></div>
    <form className='newTicket__form' onSubmit={handleSubmit(onSubmit2)}>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">Asociación:</label>
        <select {...register("quiere_asociacion", { required: true})}>
          {asociaciones.map((asociacion, i) => {
            return(
            <option key={i} value={asociacion}>{asociaciones[i]}</option>
            )})}
        </select>
      </div>
      <button className="login__button" type='submit'>SIGUIENTE</button>
    </form>
    </>
  : null}
  {formResult.length === 6 && formResult[5].quiere_asociado === "false" 
  ?
  <>
  <h1 className='newTicket__title'>Proceso terminado</h1>
  <div className='newTicket__progresEnd'></div>
  <FormFinal/>
  </> 
  : null}
  {formResult.length === 6 && formResult[5].asociacion  
  ?
  <>
  <h1 className='newTicket__title'>Proceso terminado</h1>
  <div className='newTicket__progresEnd'></div>
  <FormFinal/>
  </> 
  : null}
  {formResult.length === 7 && formResult[6].quiere_asociacion !== "" 
  ?
  <>
  <h1 className='newTicket__title'>Proceso terminado</h1>
  <div className='newTicket__progresEnd'></div>
  <FormFinal/>
  </> 
  : null}
  {console.log(formResult)}
  </section>;
}
