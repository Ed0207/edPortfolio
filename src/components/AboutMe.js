import {React, useRef, useState} from 'react'
import headshot from "./../assets/ed-selfie.jpg"
import './AboutMe.css'
import SetAnimation from './SetAnimation'
import {FaArrowUp, FaArrowDown} from "react-icons/fa"


function AboutMe(props){

    const divRef = useRef();
    const textRef = useRef();
    let textBoxY = 0;

    // observer set element classes for CSS animation

    SetAnimation(divRef);

    const clickHandler = (direction) =>{

        const TEXTSECTIONCOUNT = document.getElementsByClassName("text-section").length;
        const TOTALHEIGHT = textRef.current.offsetTop + textRef.current.offsetHeight * TEXTSECTIONCOUNT;

        textBoxY += textRef.current.offsetHeight * direction

        if(textBoxY < 0){
            textBoxY = 0;
        }

        if(textBoxY > TOTALHEIGHT){
            textBoxY = TOTALHEIGHT -textRef.current.offsetHeight;
        }

        if(textBoxY < 0){
            textBoxY = 0;
        }



        textRef.current.scrollTo({
            top: textBoxY,
            left: 0,
            behavior: "smooth",
          });
    }


    return(
            <div className='aboutme'>
                <div ref={divRef} className='hidden'>
                    <h2>About Me</h2>
                    <img src={headshot} className='headshot' alt='Edwards photo'/>
                    <div ref={textRef} className='aboutmeText'>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>
                        <div className='text-section'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                            </p>
                        </div>  
                    </div>
                    <div className='textBoxButton'>
                        <FaArrowUp onClick={((e) => clickHandler(-1))}></FaArrowUp>
                        <FaArrowDown onClick={((e) => clickHandler(1))}></FaArrowDown>
                    </div>
            </div>
    </div>);
}

export default AboutMe;