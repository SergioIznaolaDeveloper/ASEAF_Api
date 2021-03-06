import React from "react";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Tickets from './Tickets';
import NewTicket from './Tickets/NewTicket';
import Filtros from './Filtros';


import { Routes, Route } from "react-router-dom";
import { TicketsContextProvider } from '../../Context/Tickets'

function Main() {

  return (
    <main className="main">

      <TicketsContextProvider>

        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<Signup />} path='/signup' />
          <Route element={<Tickets />} path='/tickets' />
          <Route element={<NewTicket />} path='/new' />
          <Route element={<Filtros />} path='/filtros' />
        </Routes>

      </TicketsContextProvider>

    </main>
  )

}

export default Main;

