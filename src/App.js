import "./App.css";
import Navigaatio from "./components/Navigaatio";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Kylpyhuone from "./components/Kylpyhuone";
import Keittiö from "./components/Keittiö";
import Home from "./components/Home";
import Muut from "./components/Muut";
import ContactForm from "./components/ContactForm";
// import background from "./images/tausta.jpeg";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <Navigaatio />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/kylpyhuone" component={Kylpyhuone} />
            <Route exact path="/keittiö" component={Keittiö} />
            <Route exact path="/muut" component={Muut} />
            <Route exact path="/contactform" component={ContactForm} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
    // </div>
  );
}

export default App;
