import React from "react";
import { GlobalStyles } from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import Home from './pages/Home';

const theme = {
  colors: {
    // primary colors
    primaryColor: "hsl(322, 100%, 66%)",
    primaryColorLight: 'hsl(321, 100%, 78%)',
    inputFocus: 'hsl(0, 100%, 63%)',
    // 
    sectionBgColor:'hsl(207, 100%, 98%)',
    footerColor:'hsl(192, 100%, 9%)',
  },
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home/>
      </ThemeProvider>
    </>
  );
};

export default App;
