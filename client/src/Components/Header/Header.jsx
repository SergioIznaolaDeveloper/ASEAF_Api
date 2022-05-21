import React from "react";
import { Link } from "react-router-dom";

function Header() {
  
    return (
      <nav>
        <Link to='/login'>Login</Link><br />
        <Link to='/tickets'>Tickets</Link><br />
        <Link to='/filtros'>Filtros</Link>

      </nav>
    )
}

export default Header;
