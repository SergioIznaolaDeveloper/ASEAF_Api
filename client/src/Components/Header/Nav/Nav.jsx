import React, {useState} from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [color, setColor] = useState('menu__btn');

  const handleClick = () =>{
    color==='menu__btn'? setColor('menu__btn--white') : setColor('menu__btn');
  }
  return (
    <>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" onClick={handleClick}/>
        <label className={color} htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box">            
          <li><a className="menu__item" href="https://www.aseaf.org/sobre-nosotros">Sobre nosotros</a></li>
          <li><a className="menu__item" href="https://www.aseaf.org/acogimiento-familiar">Acogimiento</a></li>
          <li><Link className="menu__item" to="/">Forfamily</Link></li>
          <li><a className="menu__item" href="https://www.aseaf.org/colabora">Qué puedes hacer tú</a></li>
          <li><a className="menu__item" href="https://www.aseaf.org/actividad">Actividad</a></li>
          <li><a className="menu__item" href="https://www.aseaf.org/contacto">Contacto</a></li>
        </ul>
      </div>
    </>
  )
}

export default Nav;
