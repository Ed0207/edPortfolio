import React from 'react';
import "./Navbar.css"

function Navbar (props) {

    // props.name = Ed's portfolio
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand mr-auto p-2" href="./">{props.name}</a>
            </nav>
        </div>
    );
}

export default Navbar;