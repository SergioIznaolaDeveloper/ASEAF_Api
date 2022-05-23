import React from "react";
import Ticket from "./Ticket/Ticket";
import { Link } from "react-router-dom";
function Tickets () {
    return (
      <div className="tikets">
        <div className="tikets__getFilters">
        <div className="tikets__buscador"></div>
        <Link to='/filtros'><button className="tikets__getFilters-filters"></button></Link>
        </div>
        <div className="tikets__container">
        <Link to='/new' className="tikets__AddInfo">Añadir ticket</Link>
        </div>
        <Ticket/>
      </div>
    )
}

export default Tickets;
