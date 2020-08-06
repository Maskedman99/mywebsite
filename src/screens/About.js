import React from 'react';

import AboutUrls from '../components/AboutUrls';

import Pic from '../assets/profilePic.jpg';
import '../css/About.css';

const About = () => {
  return (
    <div className="About-main">
      <img src={Pic} alt="" width="125vw" height="125vh" className="About-ProfilePic" />
      <h1 className="About-title">About me!</h1>
      <div className="About-text">
        <p>I am Awsome!! Just like you... </p>
        <p>Testing Testing Testing :)</p>
        <p>blah blah blah blah blah blah blah blah bla cds</p>
        <p>cdskmcke</p>
        <p>cdnskaufhomejruamcboxirwmct</p>
      </div>
      <AboutUrls orientation={'horizontal'} />
    </div>
  );
};

export default About;
