import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import App from "./App";
import { AppError } from "./components/AppError";
import "./styles/style.css";
import "bootstrap/scss/bootstrap.scss";
import "./sass_styles/setup.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AppError>
      <Provider store={store}>
        <App />
      </Provider>
    </AppError>
  </BrowserRouter>,

  // </React.StrictMode>,
  document.getElementById("root")
);

