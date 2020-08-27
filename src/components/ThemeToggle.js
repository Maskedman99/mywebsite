import React, {useContext} from 'react';

import {ThemeContext} from '../context/Themes';

import moon from '../assets/moon.json';
import sun from '../assets/sun.json';

const ThemeToggle = () => {
  const {theme, changeTheme} = useContext(ThemeContext);

  return (
    <div onClick={() => changeTheme()}>
      {theme.isDark ? (
        <svg viewBox={sun.viewBox} style={{width: '24px', height: '24px', fill: 'orange'}}>
          <path d={sun.path} />
        </svg>
      ) : (
        <svg viewBox={moon.viewBox} style={{width: '24px', height: '24px', fill: '#999999'}}>
          <path d={moon.path} />
        </svg>
      )}
    </div>
  );
};

export default ThemeToggle;
