import {React, useState} from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa"
import logo from "../assets/logo.png"

function Navbar (props) {

    let banner = props.name
    if(props.name == null){
        banner = "Edward's Portfolio"
    }



    // click event handler
    const [click, setClick] = useState(false);
    const clickHandler = () =>{ 
        setClick(!click)
    }

    // navbar useState
    const [navbarTop, setNavBarVis] = useState(false);
    const navbarColorChange = () => {
        if(window.scrollY >= 20){
            setNavBarVis(true);
        }else{
            setNavBarVis(false);
        }
        console.log("screen y = " + window.scrollY)
    }

    // scroll listner (for dynamic navbar)
    window.addEventListener("scroll", navbarColorChange)
    
    if(props.dynamic === "true"){
        // props.name = Ed's portfolio
        return(
            <div className={navbarTop ? "title" : "title inactive"}>
                <Link to="/">
                    <img className="logo" src={logo} alt='logo'></img>
                    {banner}
                </Link>
                <FaBars onClick={clickHandler} className='faIcon'></FaBars>
                <ul  className={click ? "nav-menu show" : "nav-menu"}>
                    <li onClick={clickHandler} >
                        <Link to="/">Home</Link>
                    </li>
                    <li onClick={clickHandler} >
                        <Link to="/test">Testing</Link>
                    </li>
                    <li onClick={clickHandler} >
                        <Link to="/">link3</Link>
                    </li>
                    <li onClick={clickHandler} >
                        <Link to="/">link4</Link>
                    </li>
                    <li onClick={clickHandler} >
                        <Link to="/">link5</Link>
                    </li>
                </ul>
            </div>
        );
    }

    // props.name = Ed's portfolio
    return(
        <div className="title">
            <Link to="/">
                <img className="logo" src={logo} alt='logo'></img>
                {banner}
            </Link>
            <FaBars onClick={clickHandler} className='faIcon'></FaBars>
            <ul  className={click ? "nav-menu show" : "nav-menu"}>
                <li onClick={clickHandler} >
                    <Link to="/">Home</Link>
                </li>
                <li onClick={clickHandler} >
                    <Link to="/test">Testing</Link>
                </li>
                <li onClick={clickHandler} >
                    <Link to="/">link3</Link>
                </li>
                <li onClick={clickHandler} >
                    <Link to="/">link4</Link>
                </li>
                <li onClick={clickHandler} >
                    <Link to="/">link5</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;