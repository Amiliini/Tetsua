import "./App.css";
import Navigaatio from "./components/Navigaatio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Kylpyhuone from "./components/Kylpyhuone";
import Keittiö from "./components/Keittiö";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigaatio />
        <Switch>
          <Route path="/kylpyhuone" component={Kylpyhuone} />
          <Route path="/keittiö" component={Keittiö} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
