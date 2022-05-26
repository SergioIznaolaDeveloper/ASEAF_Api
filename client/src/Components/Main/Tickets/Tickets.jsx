
import React, { useContext, useEffect } from "react";
import Ticket from "./Ticket/Ticket";
import { Link, useNavigate } from "react-router-dom";

import { TicketsContext } from "../../../Context/Tickets";
import { LoginContext } from '../../../Context/Login';

function Tickets() {
  const { tickets, setTickets } = useContext(TicketsContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(LoginContext);

  const navigate = useNavigate();

  const fetchTickets = async () => {
    const response = await fetch('/api');
    const data = await response.json();
    if (!data.authenticated) {
      localStorage.setItem('auth', false);
      setIsAuthenticated(false);
      navigate('/login');
    }
    return data
  }

  useEffect(() => {
    if (!isAuthenticated) {
      const auth = localStorage.getItem('auth');
      if (auth === "true") {
        setIsAuthenticated(true)
      } else {
        navigate('/login')
      }
    }
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
        <section className="tikets__all">
          {tickets.map(ticket => <Ticket key={ticket._id} data={ticket} />)}
        </section>
    </div>
  )
}

export default Tickets;
