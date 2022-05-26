import './Styles/Styles.scss';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import { Post } from './Context/Post';
import { Get } from './Context/Get';
import axios from 'axios';

import { LoginContextProvider } from './Context/Login'

function App() {

  return (
    <div className="App">
      <BrowserRouter >

        <LoginContextProvider>

          <Header />
          <Main />
        </LoginContextProvider>


      </BrowserRouter>
    </div>
  );
}

export default App;
