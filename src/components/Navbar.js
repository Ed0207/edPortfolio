import React from 'react';

function Navbar (props) {
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand mr-auto p-2" href="#top">{props.name}</a>
            </nav>
        </div>
    );
}

export default Navbar;