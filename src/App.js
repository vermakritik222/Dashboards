import "./App.css";
import Dashboard1 from "./page/Dashboard1";
import Dashboard2 from "./page/Dashboard2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard2 />
          </Route>
          <Route exact path="/Dashboard1">
            <Dashboard1 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
