import React from "react";
//import { Link } from "react-router-dom";
import Home from "./Home/Home";
import Tickets from './Tickets';
import Filtros from './Filtros';

import { Routes, Route } from "react-router-dom";

function Main () {
  
    return (
      <main className="main">
        <Routes>
          <Route element={<Home/>} path='/login'/>
          <Route element={<Tickets/>} path='/tickets' />
          <Route element={<Filtros/>} path='/filtros' />
         
        </Routes>
      </main>
    )
  
}

export default Main;
/*
 <Route element={<Landings/>} path='/landing'/>
          <Route element={<List/>} path='/landing/list' />
          */
