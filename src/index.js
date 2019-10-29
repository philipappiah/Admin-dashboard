
import React from "react";
import ReactDOM from "react-dom";
import reducers from "./Reducers";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Login from './views/Login/login';

import "assets/css/material-dashboard-react.css?v=1.8.0";
const store = createStore(reducers, applyMiddleware(thunk));


const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);
