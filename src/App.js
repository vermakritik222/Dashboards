import "./App.css";
import Dashboard1 from "./page/Dashboard1";
import Dashboard2 from "./page/Dashboard2";
import Dashboard3 from "./page/Dashboard3";
import Dashboard4 from "./page/Dashboard4";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard4 />
          </Route>
          <Route path="/Dashboard3">
            <Dashboard3 />
          </Route>
          <Route path="/Dashboard2">
            <Dashboard2 />
          </Route>
          <Route path="/Dashboard1">
            <Dashboard1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
