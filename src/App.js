import React from 'react';
import {Route, Switch, withRouter, Redirect, NavLink} from 'react-router-dom';

import './css/App.css';

import Main from './screens/Main';
import About from './screens/About';
import Projects from './screens/Projects';
import Articles from './screens/Articles';
import ArticlePage from './components/ArticlePage';
import Protfolio from './screens/Protfolio';
import NotFound404 from './screens/NotFound404';

const App = ({location}) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-div">
          <NavLink to="/" exact className="Title" activeStyle={{pointerEvents: 'none'}}>
            ROHIT PRASAD
          </NavLink>
          <div className="App-header-links">
            <NavLink to="/about" className="Links" activeClassName="activeLink">
              ABOUT
            </NavLink>
            <NavLink to="/projects" className="Links" activeClassName="activeLink">
              PROJECTS
            </NavLink>
            <NavLink to="/protfolio" className="Links" activeClassName="activeLink">
              RESUME
            </NavLink>
            <NavLink to="/articles" className="Links" activeClassName="activeLink">
              ARTICLES
            </NavLink>
          </div>
        </div>

        <Switch location={location}>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/articles" exact component={Articles} />
          <Route path="/articles/:id" exact component={ArticlePage} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/protfolio" exact component={Protfolio} />
          <Route path="/404" component={NotFound404} />
          <Redirect to="/404" />
        </Switch>
      </header>
    </div>
  );
};

export default withRouter(App);
