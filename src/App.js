import React from 'react';
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from "react-transition-group";

import './App.css';

import Main from './screens/Main'
import About from './screens/About'
import Projects from './screens/Projects'

function App ({location, history}){

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
        
        {console.log(location)}
        {console.log(history)}

        <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 2000, exit: 2000 }}
          classNames={ 'slide'}// history.action === 'PUSH' ? 'slide': 'slide-back' }
        >
         <section className="route-section">
            <Switch location={location}>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          </Switch>
          </section>
        </CSSTransition>
        </TransitionGroup>
   
      </header>
    </div>
    );
  }

export default withRouter(App);
