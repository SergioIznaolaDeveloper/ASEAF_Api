import React, { useContext, useEffect } from "react";
import Ticket from "./Ticket/Ticket";
import { Link } from "react-router-dom";

import { TicketsContext } from "../../../Context/Tickets";

function Tickets() {
  const { tickets, setTickets } = useContext(TicketsContext);

  const fetchTickets = async () => {
    const response = await fetch('http://localhost:5000/api');
    const data = await response.json();
    return data
  }

  useEffect(() => {
    if (!tickets.length) {
      fetchTickets()
        .then(response => response.response && setTickets(response.data))
        .catch(error => console.log(error))
    }
  }, [])

  return (
    <div className="tikets">
      <div className="tikets__getFilters">
        <div className="tikets__buscador"></div>
        <Link to='/filtros'><button className="tikets__getFilters-filters"></button></Link>
      </div>
      <div className="tikets__container">
        <Link to='/new' className="tikets__AddInfo">Añadir ticket</Link>
      </div>
      {tickets.map(ticket => <Ticket key={ticket._id} data={ticket} />)}

    </div>
  )
}

export default Tickets;
