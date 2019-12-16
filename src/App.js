import React from 'react';
import './App.css';
import MainLogo from './components/MainLogo'
import RubberBandText from './components/RubberBandText'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-div">
          <p className="Title">ROHIT PRASAD</p>
          <div className="App-header-links">
              <p className="Links">ABOUT</p>
              <p className="Links">PROTFOLIO</p>
              <p className="Links">ARTICLES</p>
              <p className="Links">PROJECTS</p>
          </div>
        </div>
       
        <main className="App-main"> 
        <MainLogo />
        <div className="App-main-text">
        <RubberBandText text="Hi, I'm Rohit. I create websites "/>
        <RubberBandText text="and mobile apps for fun  :)  "/>
        </div>
      </main>
      </header>
    </div>
  );
}

export default App;
