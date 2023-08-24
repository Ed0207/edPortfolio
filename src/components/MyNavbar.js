import React from 'react';


function MyNavbar (props) {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mr-auto">
                <a className="navbar-brand mr-auto p-2" href="#">{props.name}</a>

            </nav>
        </div>
    );
}

export default MyNavbar;