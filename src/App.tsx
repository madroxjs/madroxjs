import React from "react";
import ReactDOM from "react-dom";
import theme from './theme'

import "./index.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "@mui/material";
import { FromLibrary } from 'library/components';

const App = () => (
<ThemeProvider theme={theme}>
    <FromLibrary madrox="madrox" />
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));