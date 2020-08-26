import React, {useContext, useState} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import {themes, ThemeContext} from './context/Themes';

import Navbar from './components/Navbar';

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

  return (
    <ThemeContext.Provider value={{theme: Theme, changeTheme: changeTheme}}>
      <div className="App" style={{backgroundColor: Theme.background, color: Theme.foreground}}>
        <Navbar />
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
