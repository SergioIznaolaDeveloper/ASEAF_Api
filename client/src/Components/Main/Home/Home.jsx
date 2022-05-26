import React from "react";
import { Link } from "react-router-dom";

function Home () {
  
    return (
      <div className="home">
        <article className="home__article">
          <div className="home__img"></div>
          <p className="home__description">Abre tu hogar a la acogida y conviértete en familia de acogida en tu Comunidad.</p>
          <div className="home__button-container">
            <button className="home__buttonCall">Llámanos</button>
            <Link to='/new'><button className="home__buttonCreate">Hazlo ya</button></Link>
          </div>
        </article>
      </div>
    )
  
}

export default Home;

