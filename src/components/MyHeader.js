import React from 'react';

function MyHeader(props){
    return (
        <div className='header-wraper'>
            <div className='main-info'>
                <h1>{props.text}</h1>
            </div>
        </div>
    );
}

export default MyHeader;