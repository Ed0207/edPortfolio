import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import "./ProjectCard.css"


let DISPLAYCOUNT = 5;

function repoSort(repos){

    function swap(a, b, repos){
        let temp = repos[a]
        repos[a] = repos[b]
        repos[b] = temp
    }

    // Implementing bubble sort
    // subject to change due 
    for(let i = 0; i < repos.length; i++){
        for(let j = i+1; j < repos.length; j++){
            let y1 = parseInt(repos[i].pushed_at.substring(0,4))
            let y2 = parseInt(repos[j].pushed_at.substring(0,4))
            
            if(y1 < y2){
                swap(i, j, repos)
            // same year
            }else if(y1 === y2){
                let m1 = parseInt(repos[i].pushed_at.substring(5,7))
                let m2 = parseInt(repos[j].pushed_at.substring(5,7))

                if(m1 < m2){
                    swap(i, j, repos)
                // same month
                }else if(m1 === m2){
                    let d1 = parseInt(repos[i].pushed_at.substring(8,10))
                    let d2 = parseInt(repos[j].pushed_at.substring(8,10))

                    if(d1 < d2){
                        swap(i, j, repos)
                    }
                }
            }
        }
    }

    return repos;
}


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
        let sortedData = repoSort(result.data)
        setRepos(sortedData)
    })

    // use effect stops 
    useEffect(() =>{
        // fetch();
        console.log("rendering repository item")
    },[])


    for(let i = 0; i < DISPLAYCOUNT; i++){
        
        if(Object.is(repos[i].language, null)){
            repos[i].language = "?"
        }

        displayComponent.push(
            <a className='cards' href={repos[i].html_url}>
            Name: {repos[i].name} <br></br>
            Language: {repos[i].language}<br></br> 
            Description: {repos[i].description}<br></br>
            </a>
        )
    }

    return(<div className='ProjectCard'>
        <h4>Recent Projects </h4>
        {displayComponent}
    </div>);
}

export default ProjectCard;