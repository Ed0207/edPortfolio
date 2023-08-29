import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios, {isCancel, AxiosError} from 'axios';
import {useState} from 'react';
import Navbar from './components/MyNavbar';
import MyHeader from './components/MyHeader';

var data

async function searchRepo(){

  axios({
    method: "get",
    url: 'https://api.github.com/users/ed0207/repos',
  }).then(res => {
    console.log("testing")
    data = res.data
  })
}


function App() {

  const repos = searchRepo()

  return (
    <div className="App">
      <nav>
        <Navbar name="Edward's portfolio"/>
      </nav>
      <header>
        <MyHeader text="Welcome to my portfolio"/>
      </header>
    </div>
  );
}

export default App;
