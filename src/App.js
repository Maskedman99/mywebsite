import {useContext, useState, lazy, Suspense} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import {themes, ThemeContext} from './context/Themes';

import Navbar from './components/Navbar';

import './css/App.css';

const Main = lazy(() => import('./screens/Main'));
const About = lazy(() => import('./screens/About'));
const Projects = lazy(() => import('./screens/Projects'));
const Articles = lazy(() => import('./screens/Articles'));
const ArticlePage = lazy(() => import('./components/ArticlePage'));
const Resume = lazy(() => import('./screens/Resume'));

const App = ({location}) => {
  const {theme} = useContext(ThemeContext);
  const [Theme, setTheme] = useState(theme);

  const changeTheme = async () => {
    Theme.isDark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <ThemeContext.Provider value={{theme: Theme, changeTheme: changeTheme}}>
      <div className="App" style={{backgroundColor: Theme.background, color: Theme.foreground}}>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

export default withRouter(App);
