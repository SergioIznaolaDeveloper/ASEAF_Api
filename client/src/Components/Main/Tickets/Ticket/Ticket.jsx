
import React, { useState } from 'react'

export default function Ticket(props) {
  const [extendInfo, setExtendInfo] = useState(false)
  let info = props.data
  console.log(info)
  return (
      <section className="tiket">
      <div className="tikets__tiket">
      <div className="tikets__tiket-titleContainer">
      <h1 className="tikets__tiket-title">{info.nombre}</h1><p className="tikets__tiket-exp">nº: {info._id.slice(12,20)}</p>
      </div>
      <div className="tikets__tiket-infoContainer">
      <div className="tikets__tiket-textContainer">
      {extendInfo === false?
      <>
      <p className="tikets__tiket-text"><b>Teléfono: </b>{info.telefono}</p>
      <p className="tikets__tiket-text"><b>Mail: </b>{info.email}</p>
      <p className="tikets__tiket-text"><b>Fecha de nacimiento: </b>{info.fecha_nacimiento.slice(0,10)}</p>
      <p className="tikets__tiket-text"><b>Tipo de familia: </b>{info.tipo}</p>
      </>
      :
      <>
      <p className="tikets__tiket-text"><b>Teléfono:</b> {info.telefono}</p>
      <p className="tikets__tiket-text"><b>Mail:</b> {info.email}</p>
      <p className="tikets__tiket-text"><b>Fecha de nacimiento:</b> {info.fecha_nacimiento.slice(0,10)}</p>
      <p className="tikets__tiket-text"><b>Tipo de familia:</b> {info.tipo}</p>
      <p className="tikets__tiket-text"><b>Nacionalidad:</b> {info.nacionalidad}</p>
      <p className="tikets__tiket-text"><b>Genero:</b> {info.genero}</p>
      <p className="tikets__tiket-text"><b>Número de niños en la vivienda:</b> {info.numero_hijos}</p>
      <p className="tikets__tiket-text"><b>Fecha nacimiento niño: </b> {info.fecha_hijos}</p>
      <p className="tikets__tiket-text"><b>Estado civil: </b> {info.estado_civil}</p>
      <p className="tikets__tiket-text"><b>Situación laboral:</b> {info.situacion_laboral}</p>
      <p className="tikets__tiket-text"><b>Tipo de empleo: </b> {info.profesion}</p>
      <p className="tikets__tiket-text"><b>Fecha de inicio laboral: </b> {info.fecha_profesion.slice(0,10)}</p>
      <p className="tikets__tiket-text"><b>Franja Salarial bruto anual: </b> {info.salario}</p>
      <p className="tikets__tiket-text"><b>Comunidad autónoma: </b> {info.comunidad_autonoma}</p>
      <p className="tikets__tiket-text"><b>Provincia: </b> {info.provincia}</p>
      <p className="tikets__tiket-text"><b>Tamaño de la vivienda: </b> {info.metros_vivienda}m<sup>2</sup></p>
      <p className="tikets__tiket-text"><b>Acogimiento con anterioridad: </b> {info.acogida  === true ? "Si" : "No"}</p>
      {info.acogida  === true 
      ? 
      <>
      <p className="tikets__tiket-text"><b>Nº veces que ha acogido: </b>{info.numero_acogida}</p>
      <p className="tikets__tiket-text"><b>Tiempo: </b>{info.tiempo_acogida} meses</p>
      <p className="tikets__tiket-text"><b>Tipo de acogimiento: </b>{info.tipo_acogida}</p>
      <p className="tikets__tiket-text"><b>Fecha de inicio acogimiento: </b> {info.fecha_inicio_acogida ? info.fecha_inicio_acogida.slice(0,10) : null}</p>
       {info.fecha_resolucion_acogida ? <p className="tikets__tiket-text"><b>Fecha de resolucuón acogimiento: </b>{info.fecha_resolucion_acogida.slice(0,10)}</p>: null}
       {info.fecha_asignacion_acogida ? <p className="tikets__tiket-text"><b>Fecha de asignación acogimiento: </b>{info.fecha_asignacion_acogida.slice(0,10)}</p>: null}
       </> : <></>}
      {info.asociado ? 
      info.asociado  === true ?
        <>
        <p className="tikets__tiket-text"><b>Asociado:</b> Si</p>
        <p className="tikets__tiket-text"><b>Asociación:</b> {info.asociacion}</p> 
        </>
        :
        <p className="tikets__tiket-text"><b>Asociado:</b> No</p>
      : 
      <>
      <p className="tikets__tiket-text"><b>Quiere asociarse:</b> {info.quiere_asociado === true ? "Si" : "No"}</p>
      {info.quiere_asociado === true ? <><p className="tikets__tiket-text"><b>Asociación elegida: </b>{info.quiere_asociacion}</p></> : <></>}
      </>
      }
      </>
      }
      </div>
      {extendInfo === false?
      <div className="tikets__more-info" onClick={e => setExtendInfo(true)}></div>
      : <div className="tikets__close-info" onClick={e => setExtendInfo(false)}></div>}
      </div>
      </div>
      </section>
      )
}

