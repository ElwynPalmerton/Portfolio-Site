import React, { useState } from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

function DarkModeContext(props) {

  let paletteType = props.darkMode ? "dark" : "light";

  const theme = createMuiTheme({
    palette: {
      type: paletteType,
      background: {
        default: '#333339'
      }
    },
    spacing: 4,
  });


  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default DarkModeContext;

//these gets imported into index.js and passed off to the ThemeProvider