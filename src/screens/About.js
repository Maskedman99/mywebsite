import AboutUrls from '../components/AboutUrls';

import Pic from '../assets/profilePic.jpeg';
import '../css/About.css';

const About = () => {
  return (
    <div className="About-main">
      <img src={Pic} alt="" width="125" height="125" className="About-ProfilePic" />
      <h1 className="About-title">About me!</h1>
      <div className="About-textContainer">
        <div className="About-text">
          I am Awsome!! Just like you... Testing Testing Testing :) blah blah blah blah blah blah blah blah
          bla cds cdskmcke cdnskaufhomejruamcboxirwmct
        </div>
      </div>
      <AboutUrls orientation={'horizontal'} />
    </div>
  );
};

export default About;
