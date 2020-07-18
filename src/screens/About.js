import React from 'react';

import Pic from '../assets/Rcolor.png';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import envelope from '../assets/envelope.svg';
import codepen from '../assets/codepen.svg';
import sourcerer from '../assets/sourcerer.svg';

import '../css/About.css';

const About = () => {
  return (
    <div className="About-main">
      <img src={Pic} alt="profile pic" width="125vw" height="125vh" />
      <h1 className="About-title">About me!</h1>
      <div className="About-text">
        <p>I am Awsome!! Just like you... </p>
        <p>Testing Testing Testing :)</p>
        <p>blah blah blah blah blah blah blah blah bla cds</p>
        <p>cdskmcke</p>
        <p>cdnskaufhomejruamcboxirwmct</p>
      </div>
      <div className="About-footer">
        <a
          className="About-links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Maskedman99">
          <img className="About-image" src={github} alt="github" />
        </a>
        <a
          className="About-links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/rohit-prasad-819a8015a/">
          <img className="About-image" src={linkedin} alt="linkedin" />
        </a>
        <a
          className="About-links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://codepen.io/Maskedman99/pens/">
          <img className="About-image" src={codepen} alt="codpen" />
        </a>
        <a
          className="About-links"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:rohitmpaul@gmail.com">
          <img className="About-image" src={envelope} alt="mail" />
        </a>
        <a
          className="About-links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://sourcerer.io/maskedman99">
          <img className="About-image" src={sourcerer} alt="sourcerer" />
        </a>
      </div>
    </div>
  );
};

export default About;
