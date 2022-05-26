import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav/Nav";

import { LoginContext } from '../../Context/Login';

function Header() {

  const { isAuthenticated, setIsAuthenticated } = useContext(LoginContext);

  const handleLogOut = () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
      localStorage.setItem('auth', false);
    }
  }

  return (
    <div className="header">
      <Nav />
      <Link className="header__logo" to='/'></Link>
      <Link className="header__link" to='/login'><button className="header__button" onClick={handleLogOut}>{isAuthenticated ? 'Log Out' : 'Acceder'}</button></Link>
    </div>
  )
}
export default Header;
