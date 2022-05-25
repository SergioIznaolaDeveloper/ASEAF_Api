import React from "react";
import { Link } from "react-router-dom";

function Header() {
  
    return (
      <div className="header"> 
        <div className="header__model"></div>
        <Link className="header__logo" to='/'></Link>
        <Link className="header__link" to='/login'><button className="header__button">Acceder</button></Link>

      </div>
    )
}
export default Header;
