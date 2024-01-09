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
                                <h4>Hello!</h4>
                                <p>Welcome to my website, this is a personal project of mine that showcases my fundamental knowledge of React and front end development</p>
                                <p>This website also serves as an resume/portfolio of mine</p>
                            </div>
                            <div className='text-section'>
                                <h4>Who are you?</h4>
                                <p>My name is Chien An Chen, aka Edward, and I'm a junior software developer new to the industry!</p>
                                <p>Graduated from SFU with BSc in Computing Science, I'm excited to start my junior in the field of technology and looking forward to learn and experience</p>
                                <p></p>
                            </div>
                            <div className='text-section'>
                                <h4>What else?</h4>
                                <p>That's it! </p>
                                <p>At the time being, this website has not much to offer, but i plan to keep this website updated frequently in the future</p>
                                <p>Be sure to come back in the future and check out on my update</p>
                            </div>
                            <div >
                                <p>More to come soon!</p>
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