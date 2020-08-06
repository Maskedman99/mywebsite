import React from 'react';

import AboutUrls from '../components/AboutUrls';

import '../css/Main.css';

const Main = () => {
  return (
    <div className="App-main">
      <AboutUrls orientation={'vertical'} />
      <div className="App-main-text-container">
        <div className="App-main-normaltext">Hi, I'm</div>
        <div className="App-main-title" style={{color: 'aqua'}}>
          Rohit Prasad.
        </div>
        <div className="App-main-title" style={{color: 'aquamarine'}}>
          I build things for the web and mobile.
        </div>
        <div>Currently pursuing my degree in Computer Science and Engineering</div>
        <div>at Model Engineering College, Thrikkakara.</div>
      </div>
    </div>
  );
};

export default Main;
