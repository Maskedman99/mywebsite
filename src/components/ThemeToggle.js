import React, {useContext} from 'react';

import {ThemeContext} from '../context/Themes';

import '../css/ThemeToggle.css';

const ThemeToggle = () => {
  const {changeTheme} = useContext(ThemeContext);

  return <button onClick={() => changeTheme()}>Toggle Theme</button>;
};

export default ThemeToggle;
