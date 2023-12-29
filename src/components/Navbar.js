import {React, useState, useRef} from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa"
import logo from "../assets/logo.png"

function Navbar (props) {

    let banner = props.name
    if(props.name == null){
        banner = "Edward's Portfolio"
    }

    // reference for menu
    const menuRef = useRef();

    // click event handler
    const [click, setClick] = useState(false);
    const clickHandler = () =>{ 
        setClick(!click)
    }
    
    // props.name = Ed's portfolio
    return(
        <div className="title">
            <Link to="/">
                <img className="logo" src={logo} alt='logo'></img>
                {banner}
            </Link>
            <FaBars onClick={clickHandler} className='faIcon'></FaBars>
            <ul ref={menuRef} className={click ? "nav-menu show" : "nav-menu"}>
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