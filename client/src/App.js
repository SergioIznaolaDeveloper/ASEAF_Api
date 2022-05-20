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
      <BrowserRouter>
      
          <Header/>
          <Main/>
          
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
