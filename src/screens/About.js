import React, { Component } from 'react';

import Pyramid from '../components/Pyramid';

import Pic from '../assets/Rcolor.png'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import envelope from '../assets/envelope.svg'
import "./About.css"

class About extends Component {
    render() {
        return(
            <div className="About-main">
                <img className="About-image" src={Pic} alt="" width="125vw" height="125vh"/>
                <h1 className="About-title">About me!</h1>
                <div className="About-text">
                        <p>I am Awsome!! Just like you... </p>
                        <p>Testing Testing Testing :)</p>
                        <p>blah blah blah blah blah blah blah blah bla cds</p>
                        <p>cdskmcke</p>
                        <p>cdnskaufhomejruamcboxirwmct</p>
                </div>
                <Pyramid />
                <div className="About-footer">
                    <p>Contact me: </p>
                    <a className="About-links" target="_blank" rel="noopener noreferrer" 
                                    href="https://github.com/Maskedman99">
                        <img className="About-image" src={github} alt="" width="50%" height="50%"/>
                        Github
                    </a>
                    <a className="About-links" target="_blank" rel="noopener noreferrer" 
                                    href="https://www.linkedin.com/in/rohit-prasad-819a8015a/">
                        <img className="About-image" src={linkedin} alt="" width="40%" height="40%"/>
                        LinkedIn
                    </a>
                    <p>Twitter</p>
                    <a className="About-links" target="_blank" rel="noopener noreferrer" 
                                    href="mailto:rohitmpaul@gmail.com">
                        <img className="About-image" src={envelope} alt="" width="50%" height="50%"/>
                        E-mail
                    </a>
                </div>
            </div>    
        )
    }
}

export default About;