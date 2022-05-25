import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Post } from '../../../../../Context/Post';
const estados = ["soltero", "en pareja", "casado", "divorciado", "viudo"]
const paises = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República de Macedonia", "República del Congo", "República Democrática del Congo", "República Dominicana", "República Sudafricana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];
export default function Form2() {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const { formResult, setFormResult } = useContext(Post);
  console.log(formResult);
  const onSubmit2 = values => {
    setFormResult([...formResult, values]);
    reset();
  }
  return (
    <form className='newTicket__form' onSubmit={handleSubmit(onSubmit2)}>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">Nombre:</label>
        <input className="newTicket__input" {...register("nombre", { required: true, minLength: 2, pattern: /^[A-Za-z\- ]+$/g })} />
        {errors.nombre?.type === 'required' && <p>Campo obligatorio.</p>}
        {errors.nombre?.type === 'pattern' && <p>Formato incorrecto.</p>}
      </div>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">Apellidos:</label>
        <input className="newTicket__input" {...register("apellidos", { required: true, minLength: 2, pattern: /^[A-Za-z\- ]+$/g })} />
        {errors.nombre?.type === 'required' && <p>Campo obligatorio.</p>}
        {errors.apellidos?.type === 'pattern' && <p>Formato incorrecto.</p>}
      </div>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">Nacionanlidad:</label>
        <select {...register("nacionalidad", { required: true, minLength: 6 })}>
          {paises.map((pais, i) => {
            return (
              <option key={i} value={pais}>{paises[i]}</option>
            )
          })}
        </select>
      </div>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">Teléfono:</label>
        <input type="number" className="newTicket__input" {...register("telefono", { required: true, pattern: /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/g })} />
        {errors.telefono?.type === 'pattern' && <p>Formato incorrecto.</p>}
      </div>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">Email:</label>
        <input type="email" className="newTicket__input" {...register("email", { required: true, pattern: /^[\w\-\.]+@[\w\-\.]+\.[a-z]{2,4}$/gi })} />
        {errors.email?.type === 'pattern' && <p>Formato incorrecto.</p>}
      </div>
      <div className='newTicket__input-container-radio'>
        <label className="newTicket__label">Género</label>
        <div>
          <input className="newTicket__input-radio"{...register("genero")} type="radio" id="mujer" name="genero" value="mujer"
            checked />
          <label className="newTicket__label-radio">mujer</label>
        </div>
        <div>
          <input className="newTicket__input-radio"{...register("genero")} type="radio" id="hombre" name="genero" value="hombre" />
          <label className="newTicket__label-radio">hombre</label>
        </div>
        <div>
          <input className="newTicket__input-radio"{...register("genero")} type="radio" id="otro" name="genero" value="otro" />
          <label className="newTicket__label-radio">otro</label>
        </div>
      </div>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">Fecha de nacimiento:</label>
        <input type="date" className="newTicket__input" {...register("fecha_nacimiento", { required: true })} />
        {errors.fecha_nacimiento?.type === 'required' && <p>Campo obligatorio.</p>}
      </div>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">Numero de hijos en la vivienda:</label>
        <input type="number" className="newTicket__input" {...register("numero_hijos", { required: true, minLength: 1, maxLength: 1 })} />
        {errors.numero_hijos?.type === 'required' && <p>Campo obligatorio.</p>}
      </div>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">Estado civil:</label>
        <select {...register("estado_civil", { required: true })}>
          {estados.map((estado, i) => {
            return (
              <option key={i} value={estado}>{estados[i]}</option>
            )
          })}
        </select>
      </div>
      <div className='newTicket__input-container'>
        <label className="newTicket__label">Metros2 de la vivienda:</label>
        <input type="number" className="newTicket__input" {...register("metros_vivienda", { required: true, minLength: 2 })} />
        {errors.metros_vivienda?.type === 'required' && <p>Campo obligatorio.</p>}
        {formResult[0].miembros === "2"
          ?
          <>
            <p className='newTicket__member' >Miembro 2</p>
            <div className='newTicket__input-container'>
              <label className="newTicket__label">Nombre:</label>
              <input className="newTicket__input" {...register("nombre2", { required: true, minLength: 3 })} />
            </div>
            <div className='newTicket__input-container'>
              <label className="newTicket__label">Apellidos:</label>
              <input className="newTicket__input" {...register("apellidos2", { required: true, minLength: 3 })} />
            </div>
            <div className='newTicket__input-container'>
              <label className="newTicket__label">Nacionanlidad:</label>
              <select {...register("nacionalidad2", { required: true, minLength: 6 })}>
                {paises.map((pais, i) => {
                  return (
                    <option key={i} value={pais}>{paises[i]}</option>
                  )
                })}
              </select>
            </div>
            <div className='newTicket__input-container'>
              <label className="newTicket__label">Teléfono:</label>
              <input type="number" className="newTicket__input" {...register("telefono2", { required: true, minLength: 3 })} />
            </div>
            <div className='newTicket__input-container'>
              <label className="newTicket__label">Email:</label>
              <input type="email" className="newTicket__input" {...register("email2", { required: true })} />
            </div>
            <div className='newTicket__input-container-radio'>
              <label className="newTicket__label">Género</label>
              <div>
                <input {...register("genero2")} type="radio" id="mujer" name="genero2" value="mujer"
                  checked />
                <label >mujer</label>
              </div>
              <div>
                <input {...register("genero2")} type="radio" id="hombre" name="genero2" value="hombre" />
                <label >hombre</label>
              </div>
              <div>
                <input {...register("genero2")} type="radio" id="otro" name="genero2" value="otro" />
                <label >otro</label>
              </div>
            </div>
            <div className='newTicket__input-container'>
              <label className="newTicket__label">Fecha de nacimiento:</label>
              <input type="date" className="newTicket__input" {...register("fecha_nacimiento2", { required: true })} />
            </div>
          </>
          : null}
      </div>
      <button className="login__button" type='submit'>Siguiente</button>
    </form>
  )
}
