import React, { Component } from "react";

class Ticket extends Component {
  render() {
    return ( 
    <>
    <div className="tikets__tiket">
    <div className="tikets__tiket-titleContainer">
    <h1 className="tikets__tiket-title">Juan Casquero</h1><p className="tikets__tiket-exp">nº: 20523</p>
    </div>
    <div className="tikets__tiket-infoContainer">
    <div className="tikets__tiket-textContainer">
    <p className="tikets__tiket-text">Teléfono: 646172378</p>
    <p className="tikets__tiket-text">Mail: Juancasquero@gmail.com</p>
    <p className="tikets__tiket-text">Fecha de nacimiento: 29/10/1975</p>
    <p className="tikets__tiket-text">Tipo de familia: Familia acogedora asociada</p>
    </div>
    <div>p</div>
    </div>
    </div>
    </>
    )
  }
}

export default Ticket;
