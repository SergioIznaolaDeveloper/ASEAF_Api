import React from "react";
import { Link } from "react-router-dom";

import btHeader from '../../Assets/Icons/btHeader.png';
import Nav from "./Nav/Nav";

function Header() {
  

    return (
      <div className="header"> 
        <nav className="header__nav">
          <Nav/>
          <Link className="header__link" to='/tickets'>TICKETS</Link>
          <Link className="header__link" to='/filtros'>FILTROS</Link>
        </nav>
      </div>
    )
}
export default Header;
/*
<div className="header"> 
  <nav className="header__nav">
    <div className="dropdown">
      <img src={btHeader} alt="imagen de boton" />
      <div className="dropdown-content">
        <a href="#">Sobre Nosotros</a>
        <a href="#">Acogimiento familiar</a>
        <a href="#">Forfamily</a>
        <a href="#">Qué puedes hacer tú</a>
        <a href="#">Actividad</a>
        <a href="#">Contacto</a>
      </div>
    </div>
      <Link className="header__link" to='/tickets'>TICKETS</Link>
      <Link className="header__link" to='/filtros'>FILTROS</Link>
  </nav>
</div>
      */