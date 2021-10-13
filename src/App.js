import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>this is a new page 🚀</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <h1>Lets build a google clone 🚀</h1>
      </Router>
    </div>
  );
}

export default App;
