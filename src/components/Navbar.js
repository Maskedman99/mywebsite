import React, {useContext, useState} from 'react';
import {NavLink} from 'react-router-dom';

import {ThemeContext} from '../context/Themes';

import ThemeToggle from './ThemeToggle';

import useWindowDimensions from '../hooks/useWindowDimensions';
import '../css/Navbar.css';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const {theme} = useContext(ThemeContext);

  const {width} = useWindowDimensions();
  const link = {color: theme.foreground};


  return (
    <div className="Navbar-container">
      <NavLink to="/" exact className="Title" activeStyle={{pointerEvents: 'none'}} style={link}>
        ROHIT PRASAD
      </NavLink>
      {width < 800 && (
        <div className="toggle-button" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          <span className="bar" style={{backgroundColor: theme.foreground}}></span>
          <span className="bar" style={{backgroundColor: theme.foreground}}></span>
          <span className="bar" style={{backgroundColor: theme.foreground}}></span>
        </div>
      )}
      <div
        className={width > 800 ? 'Navbar-linksHorizontal' : isNavbarOpen ? 'Navbar-linksVertical' : 'None'}>
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
  );
};

export default Navbar;
