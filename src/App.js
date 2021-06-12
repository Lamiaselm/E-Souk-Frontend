import logo from './logo.svg';
import './App.css';
import Login_Form from './Login_Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={Login_Form} />
      </div>
      </Router>

  );
}

export default App;
