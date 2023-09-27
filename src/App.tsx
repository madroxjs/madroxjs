import React from "react";
import ReactDOM from "react-dom";
import theme from './theme'

import "./index.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "@mui/material";

const App = () => (
<ThemeProvider theme={theme}>
    <div>Name: madrox</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </ThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
