import "./App.css";
import Login_Form from "./components/Login_Form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login_Form} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/detail/:id" component={ItemDetail} />
      </div>
    </Router>
  );
}

export default App;
