import React, { useEffect } from 'react';
import Typed from 'react-typed';
import img1 from './../assets/pexels-luis-gomes-546819.jpg'
import "./Hero.css"


function MyHeader(props){


    return (
        <div className='header-wraper'>
                <div className='img-filter'>
                    <img className='hero-img' src={img1}/>
                </div>
                <div className='hero-content'>
                    <h1>{props.text}</h1>
                    <Typed
                        className='typed-text'
                        strings={['Web development', 'Software development','Game development', 'Mobile App development']}
                        typeSpeed={25}
                        backSpeed={40}
                        loop
                    />
                </div>
        </div>
    );
}

export default MyHeader;