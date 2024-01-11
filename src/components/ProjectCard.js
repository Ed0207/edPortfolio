import {React, useState, useEffect, useRef} from 'react'
import axios from 'axios';
import "./ProjectCard.css"


let PROJECTCOUNT = 5;
let CENTERCARD = 0;

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


// // old, buggy implementation (cuases infinite render loop)
// // fetch github repository information

// async function getRepo(){
//     let response = await axios({
//       method: "get",
//       url: 'https://api.github.com/users/ed0207/repos',
//     })
//     return response
//   }


function ProjectCard(){

    // observer set element classes for CSS animation
    const divRef = useRef();
    const cardRef = useRef();

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
                console.log()
                const repoMap = new Map(Object.entries(repos))
                console.log("convert repositories entries to map")
                console.log(repoMap)
                
                // console.log(repoMap.get("Entries").get(1))
                
                // Array length check
                if(PROJECTCOUNT > repos.length){
                    PROJECTCOUNT = repos.length
                }

                // new implementation (map)
                
                // let itemCount = 0;
                // const mapString = repoMap.filter(item =>
                //     (itemCount++ < PROJECTCOUNT)? true: false
                // ).map(item =>
                //     <a className='card' href={item.html_url}>
                //             <div className='name'>Name: {item.name}</div>
                //             <div className='language'>Language: {item.language}</div>
                //             <div className='description'>Description: {item.description}</div>
                //             <div className='lastPushed'>Last pushed at: {item.pushed_at.substring(0,10)}</div>
                //      </a>
                // )

                // console.log("rendering repository item")
                // console.log(mapString)

                // setComponent(mapString)


                // original implementation
                // pushing render component
                for(let i = 0; i < PROJECTCOUNT; i++){
                    if(Object.is(repos[i].language, null)){
                        repos[i].language = "?"
                    }


                    displayComponent.push(
                        <a className='card' href={repos[i].html_url}>
                            <div className='name'>Name:     {repos[i].name}</div>
                            <div className='language'>Language:     {repos[i].language}</div>
                            <div className='lastPushed'>Last pushed at:     {repos[i].pushed_at.substring(0,10)}</div>
                            <div className='description'>Description:       {repos[i].description}</div>
                        </a>
                    )
                }

                setComponent(displayComponent)


            }else{
                displayComponent.push(
                    <h3 color='red'>Error: Github request fail</h3>
                )

                setComponent(cardComponents)
            }
        }).catch(() => {
            setComponent(<h3 color='red' background-color="black">Error: network failure</h3>)
        })

        // observer set element classes for CSS animation
        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add('show')
                    console.log(divRef.current)
                }else{
                    entry.target.classList.remove('show')
                    console.log(divRef.current)
                }
            })
        })
        observer.observe(divRef.current);

        // WIP
        // card observer
        const cardObserver = new IntersectionObserver((entries =>{
            entries.forEach((value, i) =>{
                if(i === CENTERCARD){
                    value.target.classList.add('mainCard')
                    console.log("main card : " + CENTERCARD)
                }else{
                    value.target.classList.remove('mainCard')
                }
            })
        }))
        // cardObserver.observe(cardRef.current);
    },[])


    return(
    <div className='ProjectCard'>
        <div ref={divRef} className='hidden'>
            <div>
                <h4>Latest Github push</h4>
                <div className='card-container'>
                    <div ref={cardRef} className='card-list'>
                        {cardComponents}
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default ProjectCard;