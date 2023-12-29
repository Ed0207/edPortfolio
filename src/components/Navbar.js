import {React, useState} from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa"

function Navbar (props) {

    let banner = props.name
    if(props.name == null){
        banner = "Edward's Portfolio"
    }

    // click event handler
    const [click, setClick] = useState(false);
    const clickHandler = () => setClick(!click)

    // props.name = Ed's portfolio
    return(
        <div className="title">
            <Link to="/">
                {banner}
            </Link>
            <FaBars onClick={clickHandler} className='faIcon'></FaBars>
            <ul className={click ? "nav-menu show" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/test">Testing</Link>
                </li>
                <li>
                    <Link to="/">link3</Link>
                </li>
                <li>
                    <Link to="/">link4</Link>
                </li>
                <li>
                    <Link to="/">link5</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;