import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

function Home(){


    return(
    <div className='Home'>
        <Navbar name="Edward's Portfolio" dynamic="true" ></Navbar>
        <Hero id="section1" text="Work in progress... (~50% complete)"></Hero>
        <AboutMe id="section2" ></AboutMe>
        <ProjectCard id="section3" ></ProjectCard>
        <Footer ></Footer>
    </div>)
}

export default Home;