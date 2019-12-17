import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import './App.css';

import Main from './screens/Main'
import About from './screens/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
        <div className="App-header-div">
              <Link to="/" className="Title">ROHIT PRASAD</Link>
          <div className="App-header-links">
              <Link to="/about" className="Links">ABOUT</Link>
              <Link to="/protfolio" className="Links">PROTFOLIO</Link>
              <Link to="/articles" className="Links">ARTICLES</Link>
              <Link to="/projects" className="Links">PROJECTS</Link>
          </div>
        </div>

          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />

        </BrowserRouter>
       
      </header>
    </div>
  );
}

export default App;
