import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { TicketsContext } from "../../../Context/Tickets";
import { LoginContext } from '../../../Context/Login';
////VARIABLES
const acogimientos = ["", "temporal", "permanente", "urgencia", "especializado"]
const salarios = ["", "<18k", "18k<24k", "24k<60k", "60k<"]
const provincias = ["", 'Alava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Avila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres',
  'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
  'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra',
  'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
  'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza']
const asociaciones = ["", "asociación1", "asociación2", "asociación3"]
const situaciones = ["", "freelance", "por cuenta ajena", "desempleado", "en búsqueda activa de empleo", "pensionista"]
const paises = ["", "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República de Macedonia", "República del Congo", "República Democrática del Congo", "República Dominicana", "República Sudafricana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];
////COMPONENTE
export default function Filtros() {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const [miembros, setMiembros] = useState("1");
  const [acogimiento, setAcogimiento] = useState("false");
  const [asociado, setAsociado] = useState("false");
  const [situacion, setSituacion] = useState("freelance");

  const { setTickets } = useContext(TicketsContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(LoginContext);
  const navigate = useNavigate();
  ///FUNCIONES
  useEffect(() => {
    if (!isAuthenticated) {
      const auth = localStorage.getItem('auth');
      if (auth === 'true') {
        setIsAuthenticated(true)
      } else {
        return navigate('/login')
      }
    }
  }, []);

  const handleChange = (e) => {
    setSituacion(e.target.value)
  }


  const onSubmitSearch = async (values) => {
    const response = await fetchSearch(values);
    if (!response.authenticated) {
      localStorage.setItem('auth', false);
      setIsAuthenticated(false);
      // setTickets([]);
      navigate('/login');
      return
    }
    setTickets(response.data)
    reset()
    navigate('/tickets')
  }

  const fetchSearch = async (values) => {
    try {
      const request = await fetch('/api/filter', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const response = await request.json();
      return response
    }
    catch (error) {
      console.log(error)
    }
  }

  return <section className="filters">
    <form onSubmit={handleSubmit(onSubmitSearch)} className="filters__form">
      <div className='filters__input-container'>
        <label className="filters__label">Tipo de familia</label>
        <select {...register("tipo")}>
          <option value=""></option>
          <option value="asociadas">Familias acogedoras asociadas</option>
          <option value="noAsociadas">Familias acogedoras sin ser asociada</option>
          <option value="potenciales">Familias potenciales que no han empezado el proceso</option>
          <option value="denegadas">Familias denegadas</option>
        </select>
      </div>
      <div className='filters__input-container-radio'>
        <label className="filters__label">Número de miembros</label>
        <div>
          <input onClick={e => setMiembros("1")} className='filters__input-radio' {...register("miembros")} type="radio" id="mujer" name="miembros" value="1"
          />
          <label className='filters__label-radio'> 1</label>
        </div>
        <div>
          <input onClick={e => setMiembros("2")} className='filters__input-radio' {...register("miembros")} type="radio" id="hombre" name="miembros" value="2" />
          <label className='filters__label-radio'> 2</label>
        </div>
      </div>

      {miembros === "1" ?
        <>
          <div className='filters__input-container-radio'>
            <label className="filters__label">Género</label>
            <div>
              <input className="filters__input-radio"{...register("genero")} type="radio" id="mujer" name="genero" value="mujer"
              />
              <label className="filters__label-radio">mujer</label>
            </div>
            <div>
              <input className="filters__input-radio"{...register("genero")} type="radio" id="hombre" name="genero" value="hombre" />
              <label className="filters__label-radio">hombre</label>
            </div>
            <div>
              <input className="filters__input-radio"{...register("genero")} type="radio" id="otro" name="genero" value="otro" />
              <label className="filters__label-radio">otro</label>
            </div>
          </div>
          <div className='filters__input-container'>
            <label className="filters__label">Nacionanlidad:</label>
            <select {...register("nacionalidad")}>
              {paises.map((pais, i) => {
                return (
                  <option key={i} value={pais}>{paises[i]}</option>
                )
              })}
            </select>
          </div>
        </>
        :
        <>
          <p className="newTicket__member">Miembro 1:</p>
          <div className='filters__input-container-radio'>
            <label className="filters__label">Género</label>
            <div>
              <input className="filters__input-radio"{...register("genero")} type="radio" id="mujer" name="genero" value="mujer"
              />
              <label className="filters__label-radio">mujer</label>
            </div>
            <div>
              <input className="filters__input-radio"{...register("genero")} type="radio" id="hombre" name="genero" value="hombre" />
              <label className="filters__label-radio">hombre</label>
            </div>
            <div>
              <input className="filters__input-radio"{...register("genero")} type="radio" id="otro" name="genero" value="otro" />
              <label className="filters__label-radio">otro</label>
            </div>
          </div>
          <div className='filters__input-container'>
            <label className="filters__label">Nacionanlidad:</label>
            <select {...register("nacionalidad")}>
              {paises.map((pais, i) => {
                return (
                  <option key={i} value={pais}>{paises[i]}</option>
                )
              })}
            </select>
          </div>
          <p className="newTicket__member">Miembro 2:</p>
          <div className='filters__input-container-radio'>
            <label className="filters__label">Género</label>
            <div>
              <input className="filters__input-radio"{...register("genero2")} type="radio" id="mujer" name="genero2" value="mujer"
              />
              <label className="filters__label-radio">mujer</label>
            </div>
            <div>
              <input className="filters__input-radio"{...register("genero2")} type="radio" id="hombre" name="genero2" value="hombre" />
              <label className="filters__label-radio">hombre</label>
            </div>
            <div>
              <input className="filters__input-radio"{...register("genero2")} type="radio" id="otro" name="genero2" value="otro" />
              <label className="filters__label-radio">otro</label>
            </div>
          </div>
          <div className='filters__input-container'>
            <label className="filters__label">Nacionanlidad:</label>
            <select {...register("nacionalidad2")}>
              {paises.map((pais, i) => {
                return (
                  <option key={i} value={pais}>{paises[i]}</option>
                )
              })}
            </select>
          </div>
        </>}

      <div className='filters__input-container'>
        <label className="filters__label">Situación laboral:</label>
        <select onClick={(e) => handleChange(e)} {...register("situacion_laboral")}>
          {situaciones.map((situacion, i) => {
            return (
              <option key={i} value={situacion}>{situaciones[i]}</option>
            )
          })}
        </select>
      </div>
      {situacion === "desempleado" || situacion === "en búsqueda activa de empleo" ?
        null
        : <div className='filters__input-container'>
          <label className="filters__label">Franja salarial:</label>
          <select {...register("salario")}>
            {salarios.map((salario, i) => {
              return (
                <option key={i} value={salario}>{salarios[i]}</option>
              )
            })}
          </select>
        </div>}
      <div className='newTicket__input-container'>
        <label className="newTicket__label">Provincia:</label>
        <select {...register("provincia")}>
          {provincias.map((provincia, i) => {
            return (
              <option key={i} value={provincia}>{provincias[i]}</option>
            )
          })}
        </select>
      </div>
      <div className='filters__input-container-radio'>
        <label className="filters__label">Acogimiento anterior</label>
        <div>
          <input onClick={e => setAcogimiento("false")} className="filters__input-radio"  {...register("acogida")} type="radio" id="hombre" name="acogida" value="false" />
          <label >No</label>
        </div>
        <div>
          <input onClick={e => setAcogimiento("true")} className="filters__input-radio"  {...register("acogida")} type="radio" id="mujer" name="acogida" value="true" />
          <label >Si</label>
        </div>
      </div>
      {acogimiento === "true" ?
        <div className='filters__input-container'>
          <label className="filters__label">Tipo de acogimiento:</label>
          <select {...register("acogimiento")}>
            {acogimientos.map((acogimiento, i) => {
              return (
                <option onClick={e => setSituacion(e.target.value)} key={i} value={acogimiento}  >{acogimientos[i]}</option>
              )
            })}
          </select>
        </div>
        : null}
      <div className='filters__input-container-radio'>
        <label className="filters__label">Asociado</label>
        <div>
          <input onClick={e => setAsociado("false")} className="filters__input-radio"  {...register("asociado")} type="radio" id="hombre" name="asociado" value="false" />
          <label >No</label>
        </div>
        <div>
          <input onClick={e => setAsociado("true")} className="filters__input-radio"  {...register("asociado")} type="radio" id="mujer" name="asociado" value="true" />
          <label >Si</label>
        </div>
      </div>
      {asociado === "true" ? <div className='filters__input-container'>
        <label className="filters__label">Asociación:</label>
        <select {...register("asociacion")}>
          {asociaciones.map((asociacion, i) => {
            return (
              <option key={i} value={asociacion}>{asociaciones[i]}</option>
            )
          })}
        </select>
      </div> : null}
      <button className="login__button" type='submit'>FILTRAR</button>
    </form>
  </section>;
}

