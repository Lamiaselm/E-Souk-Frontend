import "./App.css";
import Login_Form from "./Login_Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login_Form} />
      </div>
    </Router>
  );
}

export default App;
