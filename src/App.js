import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import FavoriteList from "./screens/FavoriteList";
import Home from "./screens/Home";
import LoginForm from "./screens/LoginForm";
import Movie from "./screens/Movie";
import RegisterForm from "./screens/RegisterForm";
import Search from "./screens/Search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/favorites" component={FavoriteList} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/search" render={() => <Search />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
