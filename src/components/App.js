import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import LoginForm from "./loginForm";
import EnquiryForm from "./EnquiryForm";
import Dashboard from "./Dashboard.js";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={EnquiryForm} />
          <Route path="/login" exact component={LoginForm} />
					<Route path="/Dashboard" exact component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
