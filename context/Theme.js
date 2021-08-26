import React from 'react';

const ThemeContext = React.createContext();

const themes = {
  light: {
    colors: {
      bg: 'white',
      card: 'white',
      smallCTitle: 'rgb(245,247,250)',
      seperator: 'rgb(216,224,237)',
      text: 'black',
      secondaryText: 'rgb(120,120,120)',
      blue: 'rgb(5,136,218)',
      gray: '#EDF3F5',
      red: 'rgb(255,87,56)',
      green: 'rgb(136,212,6)',
      orange: 'rgb(255,196,0)',
      icon: 'rgb(5,136,218)',
      highlight: 'rgba(5,136,218,0.1)',
      paleGrey: 'rgb(245,247,250)',
    },
    sizes: {
      text: 16,
      smallText: 14,
      tinyText: 12,
      largeText: 18,
      hugeText: 20,
      padding: 10,
      inputPadding: 5,
    },
    animation: {
      route: {
        animation: 'spring',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      },
    },
  },
  dark: {
    colors: {
      bg: 'black',
      card: 'rgb(40,40,41)',
      text: 'white',
      seperator: 'rgb(100,100,104)',
      smallCTitle: 'rgb(30,30,30)',
      secondaryText: 'rgb(200,200,208)',
      blue: 'rgb(5,136,218)',
      gray: '#EDF3F5',
      red: 'rgb(255,87,56)',
      green: 'rgb(136,212,6)',
      orange: 'rgb(255,196,0)',
      icon: 'rgb(5,136,218)',
      highlight: 'rgba(5,136,218,0.2)',
      paleGrey: 'rgb(28,28,29)',
    },
    sizes: {
      text: 16,
      smallText: 14,
      tinyText: 12,
      largeText: 18,
      hugeText: 20,
      padding: 10,
      inputPadding: 5,
    },
    animation: {
      route: {
        animation: 'spring',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      },
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
