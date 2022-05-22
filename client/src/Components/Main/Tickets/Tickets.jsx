import React from "react";
import Ticket from "./Ticket/Ticket";
import { Link } from "react-router-dom";
function Tickets () {
    return (
      <div className="tikets">
        <div className="tikets__getFilters">

        <div className="tikets__container">
        <Link to='/new'><button className="tikets__getFilters-plus" name="add" id="add">+</button></Link>
        <p className="tikets__AddInfo">Añadir informe</p></div>
        <Link to='/filtros'><button className="tikets__getFilters-filters"></button></Link>
        </div>
        <Ticket/>
      </div>
    )
}

export default Tickets;
