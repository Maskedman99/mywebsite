import React from 'react';

import AboutUrls from '../components/AboutUrls';

import '../css/Main.css';

const Main = () => {
  return (
    <div className="App-main">
      <AboutUrls orientation={'vertical'} />
      <>
        <div className="App-main-text">Hi, I'm </div>
        <div className="App-main-text">Rohit Prasad </div>
        <div className="App-main-text">I create websites and mobile apps for fun</div>
      </>
    </div>
  );
};

export default Main;
