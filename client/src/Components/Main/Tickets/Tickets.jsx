import React, { useContext } from "react";
import Ticket from "./Ticket/Ticket";
import { Link } from "react-router-dom";
import { Get } from "../../../Context/Get";
function Tickets () {
  const { allTickets } = useContext(Get);
    return (
      <div className="tikets">
        <div className="tikets__getFilters">
        <div className="tikets__buscador"></div>
        <Link to='/filtros'><button className="tikets__getFilters-filters"></button></Link>
        </div>
        <div className="tikets__container">
        <Link to='/new' className="tikets__AddInfo">Añadir ticket</Link>
        </div>
        <section className="tikets__all">
        {allTickets.map( ticket => (<Ticket data={ticket} />))}
        </section>
      </div>
    )
}

export default Tickets;
