import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios, {isCancel, AxiosError} from 'axios';
import {useState} from 'react';
import Navbar from './components/MyNavbar';
import Hero from './components/Hero';



// fetch github repository information
async function getRepo(){

  let response = await axios({
    method: "get",
    url: 'https://api.github.com/users/ed0207/repos',
  })

  return response
}


function App() {

  let [loadState, setTextState] = useState("loading...")


  let repos = getRepo()


  repos.then(result => {

    for(let i = 0; i < 5; i++){
      console.log(result.data[i])
    }

    setTextState("Welcome")
  })

  return (
      <div className="App">
        <nav>
          <Navbar name="Edward's portfolio"/>
        </nav>
        <header>
          <Hero text={loadState}/>
        </header>
      </div>
  );
}

export default App;
