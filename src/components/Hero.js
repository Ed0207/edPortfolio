import {React, useRef} from 'react';
import Typed from 'react-typed';
import img1 from './../assets/pexels-luis-gomes-546819.jpg'
import "./Hero.css"
import SetAnimation from './SetAnimation';
import animateBG from './../assets/pexels_videos_2278095 (1080p).mp4'

function MyHeader(props){

    // observer set element classes for CSS animation
    const divRef = useRef();
    SetAnimation(divRef);


    return (
        <div className='header-wraper' id="top">
                <div className='img-filter'>
                    <video src={animateBG} autoPlay loop muted className='hero-img' >
                    </video>
                    {/* <img className='hero-img' alt="generic programming background" src={img1} height={350}/> */}
                </div>
                        <div className='hero-content'>
                            <div ref={divRef} className='hidden'>
                                <h1>{props.text}</h1>
                                <Typed
                                    className='typed-text'
                                    strings={['Web development^1000', 'Software engineering^1000','Game programming^1000', 'Mobile application^1000']}
                                    typeSpeed={30}
                                    backSpeed={50}
                                    loop
                                />           
                        </div>
                </div>
        </div>
    );
}

export default MyHeader;