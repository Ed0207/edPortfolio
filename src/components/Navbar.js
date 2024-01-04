import {React, useState} from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import {FaBars} from "react-icons/fa"
import logo from "../assets/logo.png"

function Navbar (props) {

    let banner = props.name
    if(props.name == null){
        banner = "Edward's Portfolio"
    }


    // click event handler
    const [click, setClick] = useState(false);
    const clickHandler = () =>{ 
        setClick(!click)
    }

    // navbar useState
    const [navbarTop, setNavBarVis] = useState(true);

    // scroll detection
    window.onscroll = function(e) {
        // print "false" if direction is down and "true" if up
        console.log(this.oldScroll > this.scrollY);
        if(this.oldScroll > this.scrollY){
            setNavBarVis(true)
            console.log("scroll up")
        }else{
            setNavBarVis(false)
            setClick(false)
            console.log("scroll down")
        }
        this.oldScroll = this.scrollY;
      }


    // let lastScrollTop = 0;
    // const navbarColorChange = () => {

    //     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //     if (st > lastScrollTop) {
    //        setNavBarVis(false)
    //        console.log("scroll down")
    //     } else if (st < lastScrollTop) {
    //        setNavBarVis(true)
    //        console.log("scroll up")
    //     } 
    //     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    // }

    // // scroll listner (for dynamic navbar)
    // window.addEventListener("scroll", navbarColorChange)
    
    if(props.dynamic === "true"){
        // props.name = Ed's portfolio
        return(
            <div className={navbarTop ? "title" : "title inactive"}>
                <Link to="/">
                    <img className="logo" src={logo} alt='logo'></img>
                    {banner}
                </Link>
                <FaBars onClick={clickHandler} className='faIcon'></FaBars>

                <ul  className={click ? "nav-menu show" : "nav-menu"}>

                    <li onClick={clickHandler} >
                        <ScrollLink className='links'to="header-wraper">Home</ScrollLink>
                    </li>

                    <li onClick={clickHandler}>
                        <ScrollLink className='links'to="aboutme">About me</ScrollLink>
                    </li>

                    <li onClick={clickHandler}>
                        <ScrollLink className='links'to="ProjectCard">Project</ScrollLink>
                    </li>

                    <li onClick={clickHandler}>
                        <Link to="/test">Test Page</Link>
                    </li>

                </ul>
            </div>
        );
    }



    // props.name = Ed's portfolio
    return(
        <div className="title">
            <Link to="/">
                <img className="logo" src={logo} alt='logo'></img>
                {banner}
            </Link>
            <FaBars onClick={clickHandler} className='faIcon'></FaBars>
            <ul  className={click ? "nav-menu show" : "nav-menu"}>
                    <li onClick={clickHandler} >
                        <ScrollLink className='links'to="hero">Home</ScrollLink>
                    </li>

                    <li onClick={clickHandler}>
                        <ScrollLink className='links'to="aboutme">About me</ScrollLink>
                    </li>

                    <li onClick={clickHandler}>
                        <ScrollLink className='links'to="project">Project</ScrollLink>
                    </li>


                    <li onClick={clickHandler}>
                        <Link to="/test">Test Page</Link>
                    </li>
            </ul>
        </div>
    );
}

export default Navbar;