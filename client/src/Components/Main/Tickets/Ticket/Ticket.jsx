
import React, { useState } from 'react'

export default function Ticket({ data }) {

  const [extendInfo, setExtendInfo] = useState(false);


  const dictionary = {
    1: "<18k",
    2: "18k<24k",
    3: "24k<60k",
    4: "60k<"
  }

  return (
    <section className="tiket">
      <div className="tikets__tiket">
        <div className="tikets__tiket-titleContainer">
          <h1 className="tikets__tiket-title">{data.nombre} {data.apellidos}</h1><p className="tikets__tiket-exp">nº: 20523</p>
        </div>
        <div className="tikets__tiket-infoContainer">
          <div className="tikets__tiket-textContainer">
            {extendInfo === false ?
              <>
                <p className="tikets__tiket-text"><b>Teléfono: </b>{data.telefono}</p>
                <p className="tikets__tiket-text"><b>Mail: </b>{data.email}</p>
                <p className="tikets__tiket-text"><b>Fecha de nacimiento: </b>{data.fecha_nacimiento.slice(0, 10)}</p>
                <p className="tikets__tiket-text"><b>Tipo de familia: </b>{data.tipo}</p>
              </>
              :
              <>
                <p className="tikets__tiket-text"><b>Teléfono: </b>{data.telefono}</p>
                <p className="tikets__tiket-text"><b>Mail: </b>{data.email}</p>
                <p className="tikets__tiket-text"><b>Fecha de nacimiento: </b>{data.fecha_nacimiento.slice(0, 10)}</p>
                <p className="tikets__tiket-text"><b>Tipo de familia: </b>{data.tipo}</p>
                <p className="tikets__tiket-text"><b>Nacionalidad: </b>{data.nacionalidad}</p>
                <p className="tikets__tiket-text"><b>Genero: </b>{data.genero}</p>
                <p className="tikets__tiket-text"><b>Número de niños en la vivienda: </b>{data.numero_hijos}</p>
                {/* <p className="tikets__tiket-text"><b>Fecha nacimiento niño: </b>Familia acogedora asociada</p> */}
                <p className="tikets__tiket-text"><b>Estado civil: </b>{data.estado_civil}</p>
                <p className="tikets__tiket-text"><b>Situación laboral: </b>{data.situacion_laboral}</p>
                <p className="tikets__tiket-text"><b>Tipo de empleo: </b>{data.profesion}</p>
                <p className="tikets__tiket-text"><b>Fecha de inicio laboral: </b>{data.fecha_profesion.slice(0, 10)}</p>
                <p className="tikets__tiket-text"><b>Franja Salarial bruto anual: </b>{dictionary[data.salario]}</p>
                <p className="tikets__tiket-text"><b>Comunidad autónoma: </b>{data.comunidad_autonoma}</p>
                <p className="tikets__tiket-text"><b>Provincia: </b>{data.provincia}</p>
                <p className="tikets__tiket-text"><b>Metros cuadrados vivienda: </b>{data.metros_vivienda}m<sup>2</sup></p>
                <p className="tikets__tiket-text"><b>Acogimiento con anterioridad: </b>{data.acogida ? "Sí" : "No"}</p>

                {data.acogida &&
                  <>
                    <p className="tikets__tiket-text"><b>Nº veces que ha acogido: </b>{data.numero_acogida}</p>
                    <p className="tikets__tiket-text"><b>Tiempo: </b>{data.tiempo_acogida}</p>
                    <p className="tikets__tiket-text"><b>Tipo de acogimiento: </b>{data.tipo_acogimiento}</p>
                    <p className="tikets__tiket-text"><b>Fecha de inicio del proceso: </b>{data.fecha_inicio_acogida?.slice(0, 10)}</p>
                    <p className="tikets__tiket-text"><b>Fecha de inicio acogimiento: </b>{data.fecha_asignacion_acogida?.slice(0, 10)}</p>
                  </>}

                <p className="tikets__tiket-text"><b>Asociaccion: </b>{data.asociacion}</p>
              </>}
          </div>
          {extendInfo === false ?
            <div className="tikets__more-info" onClick={e => setExtendInfo(true)}></div>
            : <div className="tikets__close-info" onClick={e => setExtendInfo(false)}></div>}
        </div>
      </div>
    </section>
  )
}

