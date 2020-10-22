import { useContext, useState } from 'react';
import {NavLink} from 'react-router-dom';

import {ThemeContext} from '../context/Themes';

import ThemeToggle from './ThemeToggle';

import useWindowDimensions from '../hooks/useWindowDimensions';

import menuIcon from '../assets/menu.json';
import closeIcon from '../assets/close.json';

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
      {width < 800 &&
        (isNavbarOpen ? (
          <svg
            viewBox={closeIcon.viewBox}
            className="toggle-button"
            fill={theme.foreground}
            onClick={() => setIsNavbarOpen(false)}>
            <path d={closeIcon.path} />
          </svg>
        ) : (
          <svg
            viewBox={menuIcon.viewBox}
            className="toggle-button"
            fill={theme.foreground}
            onClick={() => setIsNavbarOpen(true)}>
            <path d={menuIcon.path} />
          </svg>
        ))}
      <div
        className={width > 800 ? 'Navbar-linksHorizontal' : isNavbarOpen ? 'Navbar-linksVertical' : 'None'}>
        <NavLink
          to="/about"
          className="Links"
          activeClassName="activeLink"
          style={link}
          onClick={() => setIsNavbarOpen(false)}>
          ABOUT
        </NavLink>
        <NavLink
          to="/projects"
          className="Links"
          activeClassName="activeLink"
          style={link}
          onClick={() => setIsNavbarOpen(false)}>
          PROJECTS
        </NavLink>
        <NavLink
          to="/resume"
          className="Links"
          activeClassName="activeLink"
          style={link}
          onClick={() => setIsNavbarOpen(false)}>
          RESUME
        </NavLink>
        <NavLink
          to="/articles"
          className="Links"
          activeClassName="activeLink"
          style={link}
          onClick={() => setIsNavbarOpen(false)}>
          ARTICLES
        </NavLink>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
