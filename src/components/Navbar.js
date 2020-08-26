import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';

import {ThemeContext} from '../context/Themes';

import ThemeToggle from './ThemeToggle';

import '../css/Navbar.css'

const Navbar = () => {
  const {theme} = useContext(ThemeContext);
  const link = {
    color: theme.foreground
  };

  return (
    <div className="App-header-div">
      <NavLink to="/" exact className="Title" activeStyle={{pointerEvents: 'none'}} style={link}>
        ROHIT PRASAD
      </NavLink>
      <div className="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
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
  );
};

export default Navbar;
