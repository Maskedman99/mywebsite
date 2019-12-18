import React, { Component } from 'react';

import Pic from '../assets/Rcolor.png'
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
                <div className="About-footer">
                    <p>Contact me: </p>
                    <p>Github</p>
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                    <p>E-mail</p>
                </div>
            </div>    
        )
    }
}

export default About;