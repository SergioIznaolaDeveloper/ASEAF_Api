import React from "react";
//import { Link } from "react-router-dom";

function Home () {
  
    return (
      <div className="loginPadre">
        <p>Signup</p>
        <form method="POST" action="http://localhost:5000/api/signup" >
          <label>Email</label>
          <input type="text" name="email" placeholder="Name" />
          <label>Pass</label>
          <input type="password" name="password" placeholder="Email" />
          <button type="submit">Signup</button>
        </form>
        <p>Login</p>
        <form form method="POST" action="http://localhost:5000/api/login">
          <label>Email</label>
          <input type="text" name="email" placeholder="Name"/>
          <label>Pass</label>
          <input type="password" name="password" placeholder="Email" />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  
}

export default Home;

