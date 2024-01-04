import {React, useRef} from 'react'
import headshot from "./../assets/ed-selfie.jpg"
import './AboutMe.css'
import SetAnimation from './SetAnimation'


function AboutMe(props){

    // observer set element classes for CSS animation
    const divRef = useRef();
    SetAnimation(divRef);

    return(
            <div className='aboutme'>
                <div ref={divRef} className='hidden'>
                    <h2>About Me</h2>
                    <img src={headshot} className='headshot' alt='Edward Chen'/>
                    <div className='aboutmeText'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie ac feugiat. Lorem sed risus ultricies tristique nulla aliquet enim. Magna ac placerat vestibulum lectus mauris. Arcu cursus vitae congue mauris. Amet mauris commodo quis imperdiet massa tincidunt nunc. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Amet tellus cras adipiscing enim eu turpis egestas. Dolor sit amet consectetur adipiscing elit ut. Amet risus nullam eget felis eget. Ut enim blandit volutpat maecenas. Viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla est ullamcorper eget nulla. Diam vulputate ut pharetra sit amet. Dignissim convallis aenean et tortor at risus. Nisl pretium fusce id velit ut tortor pretium viverra. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Blandit volutpat maecenas volutpat blandit aliquam etiam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie ac feugiat. Lorem sed risus ultricies tristique nulla aliquet enim. Magna ac placerat vestibulum lectus mauris. Arcu cursus vitae congue mauris. Amet mauris commodo quis imperdiet massa tincidunt nunc. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Amet tellus cras adipiscing enim eu turpis egestas. Dolor sit amet consectetur adipiscing elit ut. Amet risus nullam eget felis eget. Ut enim blandit volutpat maecenas. Viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla est ullamcorper eget nulla. Diam vulputate ut pharetra sit amet. Dignissim convallis aenean et tortor at risus. Nisl pretium fusce id velit ut tortor pretium viverra. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Blandit volutpat maecenas volutpat blandit aliquam etiam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie ac feugiat. Lorem sed risus ultricies tristique nulla aliquet enim. Magna ac placerat vestibulum lectus mauris. Arcu cursus vitae congue mauris. Amet mauris commodo quis imperdiet massa tincidunt nunc. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Amet tellus cras adipiscing enim eu turpis egestas. Dolor sit amet consectetur adipiscing elit ut. Amet risus nullam eget felis eget. Ut enim blandit volutpat maecenas. Viverra ipsum nunc aliquet bibendum enim facilisis. Fringilla est ullamcorper eget nulla. Diam vulputate ut pharetra sit amet. Dignissim convallis aenean et tortor at risus. Nisl pretium fusce id velit ut tortor pretium viverra. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Blandit volutpat maecenas volutpat blandit aliquam etiam.
                        </p>
                    </div>
            </div>
    </div>);
}

export default AboutMe;