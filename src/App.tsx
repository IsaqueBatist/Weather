import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";
import { lightTheme, darkTheme } from "./theme";
import styled from "styled-components";
import Header from './Components/Header';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header onClick={themeToggler} />
      <Card />

    </ThemeProvider>
  );
}

export default App;
