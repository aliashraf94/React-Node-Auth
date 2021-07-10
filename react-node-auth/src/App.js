import React from "react"
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home"
import Signup from "./Signup"
import Login from "./Login"

function App() {
  return (
    <BrowserRouter>
    <nav class="nav-bar" >
      <h1 text >Migracode Barcelona </h1>
      <div class="nav-bar-links">
        <Link to="/home" > Home </Link>
        <Link to="/signup" > Sign up </Link>
        <Link to="/login" > Log in </Link>
      </div>
    </nav>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
