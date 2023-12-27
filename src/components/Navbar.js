import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

function Navbar (props) {

    let banner = props.name

    if(props.name == null){
        banner = "Ed's portfolio"
    }

    // props.name = Ed's portfolio
    return(
        <div className="title">
            <Link to="/">
                {banner}
            </Link>
            <ul className='nav-menu'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/test">Testing</Link>
                </li>
            </ul>
            {/* <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand mr-auto p-2" href="./">{props.name}</a>
            </nav> */}
        </div>
    );
}

export default Navbar;