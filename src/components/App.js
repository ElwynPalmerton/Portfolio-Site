//Launched to:
//https://obscure-brook-05622.herokuapp.com/
//Domain name elwyndev.com purchased from nameCheap

import React, { useState } from 'react';
import Layout from './Layout';
import DarkModeContext from './DarkModeContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../App.css';
import { Router } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import theme from "./Theme.js"



function App() {

  const [darkState, setDarkState] = useState(true);

  const handleThemeChange = () => {
    setDarkState(!darkState);
  }

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>

        <DarkModeContext darkMode={darkState}>
          <CssBaseline />
          <Layout changeDarkMode={handleThemeChange}
            darkMode={darkState}
          />
        </DarkModeContext>
      </ThemeProvider>
    </React.StrictMode>

  );
}

export default App;
