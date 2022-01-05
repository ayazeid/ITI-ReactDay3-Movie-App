import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import LoginForm from "./screens/LoginForm";
import Movie from "./screens/Movie";
import RegisterForm from "./screens/RegisterForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
