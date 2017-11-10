import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { unregister } from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
// import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
unregister();
