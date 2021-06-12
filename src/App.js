import "./App.css";
import Login_Form from "./Login_Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={NavBar} />
        <Route exact path="/login" component={Login_Form} />
      </div>
    </Router>
  );
}

export default App;
