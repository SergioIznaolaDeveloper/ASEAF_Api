import './Styles/Styles.scss';
import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import { Post } from './Context/Post';

function App() {
  const [formResult, setFormResult] = useState([]);
  const post = {
    formResult,
    setFormResult,
  }
  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Post.Provider value={post}>
        <Main/>
        </Post.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
