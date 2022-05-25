
import React, { useState } from 'react'

export default function Ticket() {
  const [extendInfo, setExtendInfo] = useState(false)
  return (
      <section className="tiket">
      <div className="tikets__tiket">
      <div className="tikets__tiket-titleContainer">
      <h1 className="tikets__tiket-title">Juan Casquero</h1><p className="tikets__tiket-exp">nº: 20523</p>
      </div>
      <div className="tikets__tiket-infoContainer">
      <div className="tikets__tiket-textContainer">
      {extendInfo === false?
      <>
      <p className="tikets__tiket-text"><b>Teléfono: </b>646172378</p>
      <p className="tikets__tiket-text"><b>Mail: </b>Juancasquero@gmail.com</p>
      <p className="tikets__tiket-text"><b>Fecha de nacimiento: </b>29/10/1975</p>
      <p className="tikets__tiket-text"><b>Tipo de familia: </b>Familia acogedora asociada</p>
      </>
      :
      <>
      <p className="tikets__tiket-text"><b>Teléfono: </b>646172378</p>
      <p className="tikets__tiket-text"><b>Mail: </b>Juancasquero@gmail.com</p>
      <p className="tikets__tiket-text"><b>Fecha de nacimiento: </b>29/10/1975</p>
      <p className="tikets__tiket-text"><b>Tipo de familia: </b>Familia acogedora asociada</p>
      <p className="tikets__tiket-text"><b>Nacionalidad: </b>España</p>
      <p className="tikets__tiket-text"><b>Genero: </b>Hombre</p>
      <p className="tikets__tiket-text"><b>Número de niños en la vivienda:</b> 1</p>
      <p className="tikets__tiket-text"><b>Fecha nacimiento niño: </b>Familia acogedora asociada</p>
      <p className="tikets__tiket-text"><b>Estado civil: </b> Casado</p>
      <p className="tikets__tiket-text"><b>Situación laboral:</b>Cuenta Ajena</p>
      <p className="tikets__tiket-text"><b>Tipo de empleo: </b>Hosteleria</p>
      <p className="tikets__tiket-text"><b>Fecha de inicio laboral: </b>08/09/2012</p>
      <p className="tikets__tiket-text"><b>Franja Salarial bruto anual: </b>18000€/Año </p>
      <p className="tikets__tiket-text"><b>Comunidad autónoma: </b>Madrid</p>
      <p className="tikets__tiket-text"><b>Provincia: </b>Madrid</p>
      <p className="tikets__tiket-text"><b>Metros cuadrados vivienda: </b>119m<sup>2</sup></p>
      <p className="tikets__tiket-text"><b>Acogimiento con anterioridad: </b>Si</p>
      <p className="tikets__tiket-text"><b>Nº veces que ha acogido: </b>1</p>
      <p className="tikets__tiket-text"><b>Tiempo: </b>13 meses</p>
      <p className="tikets__tiket-text"><b>Tipo de acogimiento: </b>Urgencia</p>
      <p className="tikets__tiket-text"><b>Fecha de inicio acogimiento: </b>10/02/2022</p>
      <p className="tikets__tiket-text"><b>Fecha de finalización acogimiento: </b>10/05/2022</p>
      <p className="tikets__tiket-text"><b>Asociaccion: </b>Juntaex</p>
      </>}
      </div>
      {extendInfo === false?
      <div className="tikets__more-info" onClick={e => setExtendInfo(true)}></div>
      : <div className="tikets__close-info" onClick={e => setExtendInfo(false)}></div>}
      </div>
      </div>
      </section>
      )
}

