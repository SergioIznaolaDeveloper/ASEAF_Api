import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Signup</p>
        <form>
          <label>Nombre</label>
          <input type="text" name="name" placeholder="Name" />
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" />
          <button>Signup</button>
        </form>
        <p>Login</p>
        <form>
          <label>Nombre</label>
          <input type="text" name="name" placeholder="Name" />
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" />
          <button>Login</button>
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
