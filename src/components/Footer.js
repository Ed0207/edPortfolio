import React from 'react'
import "./Footer.css"
import {FaHome, FaPhone, FaTwitter, FaLinkedin} from "react-icons/fa"

function Footer(){
    return(<div className='Footer'>
        <div className='Footer-content'>
                <FaHome/> 
                <h5>4588 Dubbert St</h5>
                <h5>Richmond, B.C.</h5>
                <h5>V6X 0M1</h5>
                <FaPhone/>
                <h5>(778)513-4244</h5>
        </div>
        <div className='Footer-content'>
                <a href=""><h5> <FaLinkedin/> LinkedIn</h5></a>
        </div>
        <div className='disclaimer'>
        
        </div>
    </div>)
}

export default Footer;