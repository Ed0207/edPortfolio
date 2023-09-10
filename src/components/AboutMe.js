import React from 'react';
import './AboutMe.css'
import headshot from "./../assets/ed-selfie.jpg"

function AboutMe(props){



    return(
        <div className='aboutme'>
            <h2>Aboue Me</h2>
            <img src={headshot} className='headshot' alt='Edward Chen'/>
            <div className='aboutmeText'>
                <h3>Experience</h3>
                <body>lorem </body>
            </div>
    </div>);
}

export default AboutMe;