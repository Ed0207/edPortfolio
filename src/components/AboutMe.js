import {React, useRef, useState} from 'react'
import headshot from "./../assets/ed-selfie.jpg"
import './AboutMe.css'
import SetAnimation from './SetAnimation'
import {FaArrowUp, FaArrowDown} from "react-icons/fa"


function AboutMe(props){

    const divRef = useRef();
    const textRef = useRef();
    let textBoxIndex = 0;

    // observer set element classes for CSS animation


    SetAnimation(divRef);

    // scroll to nearby text box content top
    const clickHandler = (direction) =>{

        const TEXTSECTIONCOUNT = document.getElementsByClassName("text-section").length;

        // get current textbox y position
        let currentY = textRef.current.scrollTop;
        




        // if scrolling down
        if(direction == 1){

            // known rounding error
            // Math.ceil to avoid rounding error on Google Chrome and MS Edge
            currentY = Math.ceil(currentY);
            console.log("current textbox y : " + currentY);

            // get current textBox index
            for(let i = 0; i < TEXTSECTIONCOUNT; i++){
                let checkingOffset = document.getElementsByClassName("text-section")[i].offsetTop - document.getElementsByClassName("text-section")[0].offsetTop;
                if(currentY < checkingOffset){
                    textBoxIndex = i-1;
                    break;
                }
            }
        
        // if scrolling up
        }else{

            // known rounding error
            // Math.ceil to avoid rounding error on Google Chrome and MS Edge
            currentY = Math.floor(currentY);
            console.log("current textbox y : " + currentY);

            // get current textBox index
            for(let i = 0; i < TEXTSECTIONCOUNT; i++){
                let checkingOffset = document.getElementsByClassName("text-section")[i].offsetTop - document.getElementsByClassName("text-section")[0].offsetTop;
                if(currentY == checkingOffset || currentY < checkingOffset){
                    textBoxIndex = i;
                    break;
                }
            }          
        }


        textBoxIndex += direction
        console.log("current textbox section index : " + textBoxIndex);

        // boundary check
        if(textBoxIndex < 0)
            textBoxIndex = 0
        if(textBoxIndex > TEXTSECTIONCOUNT - 1)
            textBoxIndex = TEXTSECTIONCOUNT - 1;

        // calculate text-section offset for index
        let targetOffset = document.getElementsByClassName("text-section")[textBoxIndex].offsetTop - document.getElementsByClassName("text-section")[0].offsetTop

        console.log("target offset : " + targetOffset );

        textRef.current.scrollTo({
            top: targetOffset,
            left: 0,
            behavior: "smooth",
          });
    }


    return(
            <div className='aboutme'>
                <div ref={divRef} className='hidden'>
                    <div>
                        <h2>About Me</h2>
                        <img src={headshot} className='headshot' alt='Edwards photo'/>
                        <div ref={textRef} className='aboutmeText'>
                            <div className='text-section'>
                                <p>1 <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                            </div>
                            <div className='text-section'>
                                <p>2 <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                            </div>
                            <div className='text-section'>
                                <p>3 <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>

                            </div>
                            <div className='text-section'>
                                <p>4 <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                            </div>
                            <div className='text-section'>
                                <p>5 <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    
                                </p>

                            </div>
                            <div >
                                <p>6<br></br>end</p>
                            </div>  
                        </div>
                        <div className='textBoxButton'>
                            <FaArrowUp onClick={((e) => clickHandler(-1))}></FaArrowUp>
                            <FaArrowDown onClick={((e) => clickHandler(1))}></FaArrowDown>
                        </div>
                    </div>
                </div>
    </div>);
}

export default AboutMe;