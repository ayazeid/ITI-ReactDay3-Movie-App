import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import TextHead from "../components/TextHead";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../translatation/translation";

function LoginForm() {
  const [state, setState] = useState({ email: "", password: "" });
  const [err, setError] = useState({ email: "", password: "" });
  const { lang, setLang } = useContext(LanguageContext);
  const history = useHistory();
  //handle submit form
  const submitHandle = (e) => {
    e.preventDefault();

    if (state.email.length !== 0 && state.password.length !== 0) {
      if (err.email.length === 0 && err.password.length === 0) {
        alert("Submitted, thank you");
        console.log("submit", state);
        history.push({ pathname: "/" });
      } else {
        alert("Can not processed from, please fill the fields correctly!");
      }
    } else {
      alert("Can not processed from, please fill all the fields");
    }
  };

  //handle input and validations
  const formHandle = (input) => {
    setState({
      ...state,
      [input.target.name]: input.target.value,
    });
    //email validation
    if (input.target.name === "email") {
      let regex = new RegExp(/^[a-zA-Z0-9]+@([a-zA-Z0-9]+\.)+[a-z]{3}$/);
      let email = input.target.value;
      if (email === "") {
        setError({
          ...err,
          email: "Empty email field, please enter your email.",
        });
      } else if (!regex.test(email)) {
        setError({
          ...err,
          email: "Invailed email, please enter your email correctly",
        });
      } else if (regex.test(email)) {
        setError({ ...err, email: "" });
      } else {
        console.log("error in email validation");
      }
    }

    //password validation
    if (input.target.name === "password") {
      let password = input.target.value;
      if (password.length === 0) {
        setError({
          ...err,
          password: "Empty password field, please enter your password.",
        });
      } else if (password.length < 8) {
        setError({
          ...err,
          password: "Invailed password, please enter your password correctly",
        });
      } else if (password.length >= 8) {
        setError({ ...err, password: "" });
      } else {
        console.log("error in password validation");
      }
    }
  };

  return (
    <>
      <NavBar />
      <div
        className="contianer shadow p-2 bg-dark text-light"
        style={{ maxWidth: 700, margin: "auto", marginTop: 30 }}
      >
        <TextHead title={content[lang].login} color=" display-5 text-light" />
        <form className="m-5" onSubmit={(e) => submitHandle(e)}>
          <Input
            title={content[lang].email}
            name="email"
            type="email"
            inputHandle={(input) => formHandle(input)}
            errmsg={err.email}
          />
          <Input
            title={content[lang].password}
            name="password"
            type="password"
            inputHandle={(input) => formHandle(input)}
            errmsg={err.password}
          />
          <Button
            name={content[lang].login}
            type="submit"
            styling=" btn btn-outline-light btn-dark m-4"
          />
          <Link
            to="/register"
            className="float-end text-info"
            style={{ textDecoration: "none" }}
          >
            {content[lang].noacc}
          </Link>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
