import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Route, Link, Switch, withRouter, Redirect, useRouteMatch} from 'react-router-dom';

import './css/App.css';

import Main from './screens/Main';
import About from './screens/About';
import Projects from './screens/Projects';
import Articles from './screens/Articles';
import ArticlePage from './components/ArticlePage';
import Protfolio from './screens/Protfolio';
import NotFound404 from './screens/NotFound404';

const CustomLink = ({label, to, activeOnlyWhenExact}) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div>
      <Link to={to} className={match ? 'activeLinks' : 'Links'}>
        {label}
      </Link>
    </div>
  );
};

const App = ({location, history}) => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-div">
          <Link to="/" className="Title">
            ROHIT PRASAD
          </Link>
          <div className="App-header-links">
            <CustomLink activeOnlyWhenExact={true} to="/about" label="ABOUT" />
            <CustomLink activeOnlyWhenExact={true} to="/protfolio" label="PROTFOLIO" />
            <CustomLink activeOnlyWhenExact={true} to="/articles" label="ARTICLES" />
            <CustomLink activeOnlyWhenExact={true} to="/projects" label="PROJECTS" />
          </div>
        </div>

        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{enter: 2000, exit: 2000}}
            classNames={'slide'} // history.action === 'PUSH' ? 'slide': 'slide-back' }
          >
            <section className="route-section">
              <Switch location={location}>
                <Route path="/" exact component={Main} />
                <Route path="/about" exact component={About} />
                <Route path="/articles" exact component={Articles} />
                <Route exact path="/articles/:id" component={ArticlePage} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/protfolio" exact component={Protfolio} />
                <Route path="/404" component={NotFound404} />
                <Redirect from="/mywebsite/" to="/" />
                <Redirect to="/404" />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </header>
    </div>
  );
};

export default withRouter(App);
