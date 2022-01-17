import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//bootstrap
import "bootstrap/dist/css/bootstrap.css";
//import reducer from reducers folder
import reducer from "./reducers";
//import createStore from redux
import { createStore, compose, applyMiddleware } from "redux";
//import Provider from react-redux
import { Provider } from "react-redux";
//import redux devtools
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { LanguageContextProvider } from "./context/LanguageContext";

//createStore
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageContextProvider>
        <App />
      </LanguageContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
