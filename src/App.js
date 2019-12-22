import React from 'react';
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from "react-transition-group";

import './App.css';

import Main from './screens/Main'
import About from './screens/About'

function App ({location}){

  return (
    <div className="App">
      <header className="App-header">

        <div className="App-header-div">
              <Link to="/" className="Title">ROHIT PRASAD</Link>
          <div className="App-header-links">
              <Link to="/about" className="Links">ABOUT</Link>
              <Link to="/protfolio" className="Links">PROTFOLIO</Link>
              <Link to="/articles" className="Links">ARTICLES</Link>
              <Link to="/projects" className="Links">PROJECTS</Link>
          </div>
        </div>
  

        <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 1500, exit: 1500 }}
          classNames="fade"
        >
         <section className="route-section">
            <Switch location={location}>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          </Switch>
          </section>
        </CSSTransition>
        </TransitionGroup>
   
      </header>
    </div>
    );
  }

export default withRouter(App);
