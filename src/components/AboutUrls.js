import React from 'react';

import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import envelope from '../assets/envelope.svg';
import codepen from '../assets/codepen.svg';
import sourcerer from '../assets/sourcerer.svg';

import '../css/AboutUrls.css';

const AboutUrls = ({orientation}) => {
  return (
    <div className={orientation === 'vertical' ? 'About-footer-vertical' : 'About-footer-horizontal'}>
      <a
        className="About-links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Maskedman99">
        <img className="About-image" src={github} alt="" />
      </a>
      <a
        className="About-links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/rohit-prasad-819a8015a/">
        <img className="About-image" src={linkedin} alt="" />
      </a>
      <a
        className="About-links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://codepen.io/Maskedman99/pens/">
        <img className="About-image" src={codepen} alt="" />
      </a>
      <a
        className="About-links"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:rohitmpaul@gmail.com">
        <img className="About-image" src={envelope} alt="" />
      </a>
      <a
        className="About-links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://sourcerer.io/maskedman99">
        <img className="About-image" src={sourcerer} alt="" />
      </a>
    </div>
  );
};

export default AboutUrls;
