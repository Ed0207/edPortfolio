import React from 'react';
import Typed from 'react-typed';
import img1 from './../assets/pexels-luis-gomes-546819.jpg'
import "./Hero.css"


function MyHeader(props){


    return (
        <div className='header-wraper' id="top">
                <div className='img-filter'>
                    <img className='hero-img' alt="generic programming background" src={img1} height={300}/>
                </div>
                <div className='hero-content'>
                    <h1>{props.text}</h1>
                    <Typed
                        className='typed-text'
                        strings={['Web development', 'Software development','Game development', 'Mobile development']}
                        typeSpeed={25}
                        backSpeed={40}
                        loop
                    />
                </div>
        </div>
    );
}

export default MyHeader;