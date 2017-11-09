import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { unregister } from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store";
// import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
unregister();
