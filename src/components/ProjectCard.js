import React from 'react'
import "./ProjectCard.css"

function ProjectCard(Props){

    let repos = Props.repos

    // sort by push_at

    return(<div className='ProjectCard'>
        <h4>Recent Projects: </h4>
        <a href={repos[0].html_url}>
            {repos[0].name}
        </a>
        <a href={repos[0].html_url}>
            {repos[1].name}
        </a>
        <a href={repos[0].html_url}>
            {repos[2].name}
        </a>
        <a href={repos[0].html_url}>
            {repos[3].name}
        </a>
        <a href={repos[0].html_url}>
            {repos[4].name}
        </a>
        
    </div>);
}

export default ProjectCard;