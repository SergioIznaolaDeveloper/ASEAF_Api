import React, {useContext} from 'react'
import { useForm } from "react-hook-form";
import { Post } from '../../../../../Context/Post';

 const situaciones = ["freelance", "por cuenta ajena", "desempleado", "en búsqueda activa de empleo", "pensionista"]
 const sectores = ["administración", "agricultura", "alimentos", "artes", "banca", "comercio", "construcción", "confección", "educación", "energía", "entretenimiento", "finanzas", "gobierno", "hoteles", "industria", "informática", "inmobiliario", "médico", "música", "oficina", "otros", "pesca", "profesionales", "publicidad", "salud", "servicios",]
 const salarios = ["<18k", "18k<24k", "24k<60k", "60k<"]
 const comunidades = ["Andalucía", "Aragón", "Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha", "Cataluña", "Ceuta", "Comunidad Valenciana", "Comunidad de Madrid", "Extremadura", "Galicia", "Islas Baleares", "La Rioja", "Melilla", "Navarra", "País Vasco", "Principado de Asturias", "Región de Murcia"]
const  provincias = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza']
export default function Form3() {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const {formResult, setFormResult} = useContext(Post);
  console.log(formResult);
  const onSubmit2 = values => {
    setFormResult([...formResult, values]);
    reset();
  }
  return (
    <form className='newTicket__form' onSubmit={handleSubmit(onSubmit2)}>
      {formResult[0].miembros === "2" ? <p>Miembro 1</p> : null}
<div className='newTicket__input-container'>
<label className="newTicket__label">Situación laboral:</label>
<select {...register("situacion_laboral", { required: true })}>
{situaciones.map((situacion, i) => {
  return(
<option key={i} value={situacion}>{situaciones[i]}</option>
)})}
</select>
</div>
<div className='newTicket__input-container'>
<label className="newTicket__label">Sector profesional:</label>
<select {...register("profesion", { required: true})}>
{sectores.map((sector, i) => {
  return(
<option key={i} value={sector}>{sectores[i]}</option>
)})}
</select>
</div>
<div className='newTicket__input-container'>
<label className="newTicket__label">Fecha inicio situación laboral:</label>
<input type="date" className="newTicket__input" {...register("fecha_profesion", { required: true })} />
</div>
<div className='newTicket__input-container'>
<label className="newTicket__label">Franja salarial:</label>
<select {...register("salario", { required: true})}>
{salarios.map((salario, i) => {
  return(
<option key={i} value={salario}>{salarios[i]}</option>
)})}
</select>
</div>
<div className='newTicket__input-container'>
<label className="newTicket__label">Comunidad autónoma:</label>
<select {...register("comunidad_autonoma", { required: true})}>
{comunidades.map((comunidad, i) => {
  return(
<option key={i} value={comunidad}>{comunidades[i]}</option>
)})}
</select>
</div>
<div className='newTicket__input-container'>
<label className="newTicket__label">Provincia:</label>
<select {...register("provincia", { required: true})}>
{provincias.map((provincia, i) => {
  return(
<option key={i} value={provincia}>{provincias[i]}</option>
)})}
</select>

</div>
{formResult[0].miembros === "2" 
?
<>
<p>Miembro 2</p>
<div className='newTicket__input-container'>
<label className="newTicket__label">Situación laboral:</label>
<select {...register("situacion_laboral2", { required: true })}>
{situaciones.map((situacion, i) => {
  return(
<option key={i} value={situacion}>{situaciones[i]}</option>
)})}
</select>
</div>
<div className='newTicket__input-container'>
<label className="newTicket__label">Sector profesional:</label>
<select {...register("profesion2", { required: true})}>
{sectores.map((sector, i) => {
  return(
<option key={i} value={sector}>{sectores[i]}</option>
)})}
</select>
</div>
<div className='newTicket__input-container'>
<label className="newTicket__label">Fecha inicio situación laboral:</label>
<input type="date" className="newTicket__input" {...register("fecha_profesion2", { required: true })} />
</div>
<div className='newTicket__input-container'>
<label className="newTicket__label">Franja salarial:</label>
<select {...register("salario2", { required: true})}>
{salarios.map((salario, i) => {
  return(
<option key={i} value={salario}>{salarios[i]}</option>
)})}
</select>
</div>
</> : null}
<button className="login__button" type='submit'>SIGUIENTE</button>
</form>
  )
}
