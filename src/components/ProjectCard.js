import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';
import "./ProjectCard.css"


let PROJECTCOUNT = 6;

function repoSort(repos){

    function swap(a, b, repos){
        let temp = repos[a]
        repos[a] = repos[b]
        repos[b] = temp
    }

    // Implementing bubble sort
    // subject to change for any O(n log n) sort
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


// old implementation (cuases infinite render loop)
// // fetch github repository information
// async function getRepo(){

//     let response = await axios({
//       method: "get",
//       url: 'https://api.github.com/users/ed0207/repos',
//     })
  
//     return response
//   }


function ProjectCard(){

    let [cardComponents, setComponent] = useState([])


    // let process = getRepo()
    // process.then(result =>{
    //     let sortedData = repoSort(result.data)
    //     setRepos(sortedData)
    // })

    
    // empty array to avoid infinite render loop (nothing can be triggered)
    useEffect(() =>{

        // fetching repsitory information
        axios({method: "get", url: 'https://api.github.com/users/ed0207/repos'}).then((response) =>{

        let displayComponent = []

            if(response.status === 200){
                    
                let repos = response.data

                repos = repoSort(repos)
                
                // Array length check
                if(PROJECTCOUNT > repos.length){
                    PROJECTCOUNT = repos.length
                }

                // pushing render component
                for(let i = 0; i < PROJECTCOUNT; i++){
                    
                    if(Object.is(repos[i].language, null)){
                        repos[i].language = "?"
                    }

                    displayComponent.push(
                        <a className='cards' href={repos[i].html_url}>
                            <div className='name'>Name: {repos[i].name}</div>
                            <div className='language'>Language: {repos[i].language}</div>
                            <div className='description'>Description: {repos[i].description}</div>
                            <div className='lastPushed'>Last pushed at: {repos[i].pushed_at.substring(0,10)}</div>
                        </a>
                    )
                }

                setComponent(displayComponent)

                console.log("rendering repository item")
                console.log(repos)

            }else{
                displayComponent.push(
                    <h3 color='red'>Error: Github request fail</h3>
                )

                setComponent(cardComponents)
            }
        }).catch(() => {
            setComponent(<h3 color='red'>Error: network failure</h3>)
        })
    },[])


    return(<div className='ProjectCard'>
        <h4>Recent Projects </h4>
        {cardComponents}
    </div>);
}

export default ProjectCard;