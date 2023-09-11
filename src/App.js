import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useState} from 'react';
import Navbar from './components/MyNavbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';


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
  let [repos, setRepos] = useState([
    [{name: "my project", html_url:"https://github.com/Ed0207/edPortfolio"}],
    [{name: "my project", html_url:"https://github.com/Ed0207/edPortfolio"}],
    [{name: "my project", html_url:"https://github.com/Ed0207/edPortfolio"}],
    [{name: "my project", html_url:"https://github.com/Ed0207/edPortfolio"}],
    [{name: "my project", html_url:"https://github.com/Ed0207/edPortfolio"}]
  ])

 
  let temp = getRepo()

  temp.then(result => {

    setRepos(result.data)
    setTextState("Welcome")
    
  })


  return (
      <div className="App">
        <Navbar name="Edward's portfolio"/>
        <Hero text={loadState}/>
        <AboutMe/>
        <ProjectCard repos={repos}/>
      </div>
  );
}

export default App;
