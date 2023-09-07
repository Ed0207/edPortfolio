import React from 'react';
import './AboutMe.css'
import headshot from "./../assets/ed-selfie.jpg"

function AboutMe(props){



    return(
        <div className='aboutme'>
        <h2>Who am I?</h2>
        <img src={headshot} alt="my selfie" className='headshot' width={200} height={300}>
        </img>
        <body className="aboutmeInfo">
            <h5>about me</h5>
            <body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</body>
        </body>
    </div>);
}

export default AboutMe;