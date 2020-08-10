import React, {useContext} from 'react';

import {ThemeContext} from '../context/Themes';

import moon from '../assets/moon.json';
import sun from '../assets/sun.json';

const ThemeToggle = () => {
  const {theme, changeTheme} = useContext(ThemeContext);

  return (
    <div onClick={() => changeTheme()}>
      {theme.isDark ? (
        <svg viewBox={sun.viewBox} style={{width: '4vw', height: '4vh', fill: 'orange'}}>
          <path d={sun.path} />
        </svg>
      ) : (
        <svg viewBox={moon.viewBox} style={{width: '4vw', height: '4vh', fill: 'grey'}}>
          <path d={moon.path} />
        </svg>
      )}
    </div>
  );
};

export default ThemeToggle;
