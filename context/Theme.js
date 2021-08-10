import React from 'react';

const ThemeContext = React.createContext();

const themes = {
  light: {
    colors: {
      bg: 'white',
      card: 'white',
      text: 'black',
      secondaryText: 'black',
      blue: 'rgb(5,136,218)',
      gray: '#EDF3F5',
      red: 'rgb(255,87,56)',
      orange: 'rgb(255,196,0)',
      icon: 'rgb(5,136,218)',
      highlight: 'rgba(5,136,218,0.1)',
    },
  },
  dark: {
    colors: {
      bg: 'black',
      card: 'rgb(40,40,41)',
      text: 'white',
      secondaryText: 'rgb(200,200,208)',
      blue: 'rgb(5,136,218)',
      gray: '#EDF3F5',
      red: 'rgb(255,87,56)',
      orange: 'rgb(255,196,0)',
      icon: 'rgb(5,136,218)',
      highlight: 'rgba(5,136,218,0.2)',
    },
  },
};

function ThemeProvider(props) {
  const [theme, setTheme] = React.useState(themes.light);

  function toggleTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }} {...props} />;
}

export default ThemeProvider;

export function useTheme() {
  return React.useContext(ThemeContext);
}
