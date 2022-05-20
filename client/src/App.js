import './Styles/Styles.scss';
import { BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import Main from './Components/Main';
//import Footer from './components/Footer';

//import logo from './logo.svg';
//import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;
