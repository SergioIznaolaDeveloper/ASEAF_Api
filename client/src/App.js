import './Styles/Styles.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Main/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
