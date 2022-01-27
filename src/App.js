import React from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import FavoriteList from "./screens/FavoriteList";
import Home from "./screens/Home";
import LoginForm from "./screens/LoginForm";
import Movie from "./screens/Movie";
import RegisterForm from "./screens/RegisterForm";
import Search from "./screens/Search";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <LoadingBar />
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/favorites" component={FavoriteList} />
          <Route path="/movie/:id" render={(props) => <Movie {...props} />} />
          <Route path="/search" render={() => <Search />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default connect()(App);
