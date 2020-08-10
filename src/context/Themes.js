import React from 'react';

export const themes = {
  light: {
    isDark: false,
    foreground: '#000000',
    background: '#F7F7F7',
    divider: 'hsla(0, 0%, 0%, 0.12)',
  },
  dark: {
    isDark: true,
    foreground: '#ffffff',
    background: '#282c34',
    divider: 'hsla(0, 0%, 100%, 0.28)',

  }
};

export const ThemeContext = React.createContext({theme: themes.dark, changeTheme: () => {}});