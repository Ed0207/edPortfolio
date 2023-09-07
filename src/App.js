import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useState} from 'react';
import Navbar from './components/MyNavbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';


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
        <Navbar name="Edward's portfolio"/>
        <Hero text={loadState}/>
        <AboutMe/>
      </div>
  );
}

export default App;
