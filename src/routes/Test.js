import React from 'react'
import Navbar from '../components/Navbar';

function Test(){

    let testingText = {margin:"20vh 5vw"}
    
    return(<div>
        <Navbar></Navbar>
        <h1 style={testingText}>Testing page</h1>
    </div>)
}

export default Test;