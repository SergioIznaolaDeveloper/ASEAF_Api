import './Styles/Styles.scss';
import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import { Post } from './Context/Post';
import { Get } from './Context/Get';
import axios from 'axios';

function App() {
  const [formResult, setFormResult] = useState([]);
  const [allTickets, setAllTickets] = useState([]);
  
  const getAllTickets = async () => {
    if (allTickets.length === 0) {
    const resp = await axios.get(`http://localhost:5000/api`);
    const data = await resp.data;
    setAllTickets(data.data); 
    } 
  }
  getAllTickets()

  const post = {
    formResult,
    setFormResult,
  }
  
  const get = {
    allTickets,
    setAllTickets
  }
  
  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Get.Provider value={get}>
        <Post.Provider value={post}>
        <Main/>
        </Post.Provider>
        </Get.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
