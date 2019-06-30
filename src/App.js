import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./test/Home";
import School from "./test/School";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/:schoolId" component={School} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
