import React from "react";
import { Link } from "react-router-dom";

function Header() {
  
    return (
      <div className="header"> 
      <nav className="header__nav">
        <Link className="header__link" to='/tickets'>TICKETS</Link>
        <Link className="header__link" to='/filtros'>FILTROS</Link>
      </nav>
      </div>
    )
}
export default Header;
