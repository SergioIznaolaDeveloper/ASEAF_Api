import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box">            
          <li><Link className="menu__item" to="#">Sobre nosotros</Link></li>
          <li><Link className="menu__item" to="#">Acogimiento</Link></li>
          <li><Link className="menu__item" to="#">Forfamily</Link></li>
          <li><Link className="menu__item" to="#">Qué puedes hacer tú</Link></li>
          <li><Link className="menu__item" to="#">Actividad</Link></li>
          <li><Link className="menu__item" to="#">Contacto</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Nav;
