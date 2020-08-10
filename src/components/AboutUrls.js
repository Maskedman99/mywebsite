import React, {useContext} from 'react';

import {ThemeContext} from '../context/Themes';

import github from '../assets/github.json';
import linkedin from '../assets/linkedin.json';
import mail from '../assets/mail.json';
import codepen from '../assets/codepen.json';
import sourcerer from '../assets/sourcerer.json';

import '../css/AboutUrls.css';

const AboutUrls = ({orientation}) => {
  const {theme} = useContext(ThemeContext)

  const imgStyle = {
    fill: theme.foreground
  }

  return (
    <div
      className={orientation === 'vertical' ? 'About-footer-vertical' : 'About-footer-horizontal'}>
      <a
        className="About-links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Maskedman99">
        <svg className="About-image" viewBox={github.viewBox} style={imgStyle}>
          <path d={github.path} />
        </svg>
      </a>
      <a
        className="About-links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/rohit-prasad-819a8015a/">
        <svg className="About-image" viewBox={linkedin.viewBox} style={imgStyle}>
          <path d={linkedin.path} />
        </svg>
      </a>
      <a
        className="About-links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://codepen.io/Maskedman99/pens/">
        <svg className="About-image" viewBox={codepen.viewBox} style={imgStyle}>
          <path d={codepen.path} />
        </svg>
      </a>
      <a
        className="About-links"
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:rohitmpaul@gmail.com">
        <svg className="About-image" viewBox={mail.viewBox} style={imgStyle}>
          <path d={mail.path} />
        </svg>
      </a>
      <a
        className="About-links"
        target="_blank"
        rel="noopener noreferrer"
        href="https://sourcerer.io/maskedman99">
        <svg className="About-image" viewBox={sourcerer.viewBox} style={imgStyle}>
          <path d={sourcerer.path} />
        </svg>
      </a>
    </div>
  );
};

export default AboutUrls;
