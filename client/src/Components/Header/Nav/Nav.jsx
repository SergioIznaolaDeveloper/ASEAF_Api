import React, {useState} from "react";
import btHeader from '../../../Assets/Icons/btHeader.png';
import btX from '../../../Assets/Icons/btX2.png';


function Nav() {
  const [ toggleBt, setToggleBt ] = useState(false);

    return (
      <>
        <img class="menu__btn" className="btNav" onClick={()=>setToggleBt(!toggleBt)} src={btHeader} alt="imagen de boton" />
        <nav className="header__nav">
     
              
              <ul className={toggleBt? "dropdown-content-show" : "dropdown-content"}>
                <img className="btX" onClick={()=>setToggleBt(false) } src={btX} alt="boton cerrar" />
                <li><a className="header_item" href="#">Sobre Nosotros</a></li>
                <li><a className="header_item" href="#">Acogimiento familiar</a></li>
                <li><a className="header_item" href="#">Forfamily</a></li>
                <li><a className="header_item" href="#">Qué puedes hacer tú</a></li>
                <li><a className="header_item" href="#">Actividad</a></li>
                <li><a className="header_item" href="#">Contacto</a></li>
              </ul>
            
          </nav>
      </>
    )
  
}

export default Nav;
/*
<nav className="header__nav">
          <div className="dropdown">
            <img src={btHeader} alt="imagen de boton" />
            <ul className="dropdown-content">
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Acogimiento familiar</a></li>
              <li><a href="#">Forfamily</a></li>
              <li><a href="#">Qué puedes hacer tú</a></li>
              <li><a href="#">Actividad</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
        </nav>
        */