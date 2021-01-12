import React, { useState } from 'react';
import Layout from './Layout';
import DarkModeContext from './DarkModeContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../App.css';
import { Router } from 'react-router-dom';

function App() {

  const [darkState, setDarkState] = useState(true);

  const handleThemeChange = () => {
    setDarkState(!darkState);
  }

  return (
    <React.StrictMode>
      <DarkModeContext darkMode={darkState}>
        <CssBaseline />
        <Layout changeDarkMode={handleThemeChange}
          darkMode={darkState}
        />
      </DarkModeContext>
    </React.StrictMode>

  );
}

export default App;
