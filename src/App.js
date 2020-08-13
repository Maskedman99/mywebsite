import React, {useContext, useState} from 'react';
import {Route, Switch, withRouter, Redirect, NavLink} from 'react-router-dom';

import {themes, ThemeContext} from './context/Themes';

import ThemeToggle from './components/ThemeToggle';

import Main from './screens/Main';
import About from './screens/About';
import Projects from './screens/Projects';
import Articles from './screens/Articles';
import ArticlePage from './components/ArticlePage';
import Resume from './screens/Resume';

import './css/App.css';

const App = ({location}) => {
  const {theme} = useContext(ThemeContext);
  const [Theme, setTheme] = useState(theme);

  const changeTheme = async () => {
    Theme.isDark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  const link = {
    color: Theme.foreground
  };

  return (
    <ThemeContext.Provider value={{theme: Theme, changeTheme: changeTheme}}>
      <div className="App" style={{backgroundColor: Theme.background, color: Theme.foreground}}>
        <div className="App-header-div">
          <NavLink to="/" exact className="Title" activeStyle={{pointerEvents: 'none'}} style={link}>
            ROHIT PRASAD
          </NavLink>
          <div className="App-header-links">
            <NavLink to="/about" className="Links" activeClassName="activeLink" style={link}>
              ABOUT
            </NavLink>
            <NavLink to="/projects" className="Links" activeClassName="activeLink" style={link}>
              PROJECTS
            </NavLink>
            <NavLink to="/resume" className="Links" activeClassName="activeLink" style={link}>
              RESUME
            </NavLink>
            <NavLink to="/articles" className="Links" activeClassName="activeLink" style={link}>
              ARTICLES
            </NavLink>
            <ThemeToggle />
          </div>
        </div>

        <Switch location={location}>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Route path="/articles" exact component={Articles} />
          <Route path="/articles/:id" exact component={ArticlePage} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/resume" exact component={Resume} />
          <Redirect to="/" />
        </Switch>
      </div>
    </ThemeContext.Provider>
  );
};

export default withRouter(App);
