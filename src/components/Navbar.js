import React from 'react';

const Navbar = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand mr-auto p-2" href="#">My portoflio</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">link 1 <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 2 </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 3 </a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;