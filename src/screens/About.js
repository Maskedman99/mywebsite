import React, { Component } from 'react';

import Pyramid from '../components/Pyramid';

import Pic from '../assets/Rcolor.png'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import envelope from '../assets/envelope.svg'
import codepen from '../assets/codepen.svg'

import "./About.css"

class About extends Component {
    render() {
        return(
            <div className="About-main">
                <img src={Pic} alt="" width="125vw" height="125vh"/>
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
                    <p>Find me at: </p>
                    <a className="About-links" target="_blank" rel="noopener noreferrer" 
                                    href="https://github.com/Maskedman99">
                        <img className="About-image" src={github} alt=""/>
                        Github
                    </a>
                    <a className="About-links" target="_blank" rel="noopener noreferrer" 
                                    href="https://www.linkedin.com/in/rohit-prasad-819a8015a/">
                        <img className="About-image" src={linkedin} alt=""/>
                        LinkedIn
                    </a>
                    <a className="About-links" target="_blank" rel="noopener noreferrer" 
                                    href="https://codepen.io/Maskedman99/pens/">
                        <img className="About-image" src={codepen} alt=""/>
                        CodePen
                    </a>
                    <a className="About-links" target="_blank" rel="noopener noreferrer" 
                                    href="mailto:rohitmpaul@gmail.com">
                        <img className="About-image" src={envelope} alt=""/>
                        E-mail
                    </a>
                </div>
            </div>    
        )
    }
}

export default About;