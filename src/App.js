import React, { useContext } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import {
  LanguageContext,
  LanguageContextProvider,
} from "./context/LanguageContext";
import FavoriteList from "./screens/FavoriteList";
import Home from "./screens/Home";
import LoginForm from "./screens/LoginForm";
import Movie from "./screens/Movie";
import RegisterForm from "./screens/RegisterForm";
import Search from "./screens/Search";

function App(props) {
  const { lang, setLang } = useContext(LanguageContext);
  //console.log("from app", lang);
  return (
    <div className="App">
      <BrowserRouter>
        <LoadingBar />
        <Switch>
          {/* <LanguageContextProvider> */}
          <Route exact path="/" render={() => <Home />} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/favorites" component={FavoriteList} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/search" render={() => <Search />} />
          {/* </LanguageContextProvider> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default connect()(App);
