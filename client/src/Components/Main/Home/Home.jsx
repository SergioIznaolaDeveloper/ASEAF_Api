import React from "react";
//import { Link } from "react-router-dom";

function Home () {
  
    return (
      <div className="loginPadre">
        <form action="submit" className="login">
            <input type="text" placeholder="Usuario" name="usuario" id="usuario" />
            <input type="password" placeholder="Constraseña" name="password" id="password" />
            <button type="submit" className="btLogin">Login</button>
        </form>
      </div>
    )
  
}

export default Home;
/*

        */