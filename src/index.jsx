import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import store from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
    <App/>
    </Provider>
    </Router>
  </React.StrictMode>
);

