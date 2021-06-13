import "./App.css";
import Login_Form from "./Login_Form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import ItemDetail from "./ItemDetail";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login_Form} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/detail" component={ItemDetail} />
      </div>
    </Router>
  );
}

export default App;
