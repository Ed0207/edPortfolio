import React from 'react'
import axios from 'axios';
import {useState} from 'react';
import "./ProjectCard.css"


let DISPLAYCOUNT = 5;

// fetch github repository information
async function getRepo(){

    let response = await axios({
      method: "get",
      url: 'https://api.github.com/users/ed0207/repos',
    })
  
    return response
  }

function ProjectCard(){

    let [repos, setRepos] = useState([
        [{name: "project name", html_url:"https://github.com/Ed0207/edPortfolio", description:"Description", language:"Language", pushed_at:"Null"}, []],
        [{name: "project name", html_url:"https://github.com/Ed0207/edPortfolio", description:"Description", language:"Language", pushed_at:"Null"}, []],
        [{name: "project name", html_url:"https://github.com/Ed0207/edPortfolio", description:"Description", language:"Language", pushed_at:"Null"}, []],
        [{name: "project name", html_url:"https://github.com/Ed0207/edPortfolio", description:"Description", language:"Language", pushed_at:"Null"}, []],
        [{name: "project name", html_url:"https://github.com/Ed0207/edPortfolio", description:"Description", language:"Language", pushed_at:"Null"}, []]])

    const displayComponent = []

    let process = getRepo()

    process.then(result =>{
        setRepos(result.data)
    })


    for(let i = 0; i < DISPLAYCOUNT; i++){
        displayComponent.push(
            <a className='cards' href={repos[i].html_url}>
            Name: {repos[i].name} <br></br>
            Language: {repos[i].language}<br></br> 
            Description: {repos[i].description}
            </a>
        )
    }

    return(<div className='ProjectCard'>
        <h4>Recent Projects: </h4>
        {displayComponent}
    </div>);
}

export default ProjectCard;