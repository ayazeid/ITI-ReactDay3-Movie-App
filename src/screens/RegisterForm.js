import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import TextHead from "../components/TextHead";

function RegisterForm() {
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });
  const [err, setError] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });

  //handle submit form
  const submitHandle = (e) => {
    e.preventDefault();

    //confirm submit
    if (
      state.name.length !== 0 &&
      state.email.length !== 0 &&
      state.username.length !== 0 &&
      state.password.length !== 0 &&
      state.cpassword.length !== 0
    ) {
      if (
        err.name.length === 0 &&
        err.email.length === 0 &&
        err.username.length === 0 &&
        err.password.length === 0 &&
        err.cpassword.length === 0
      ) {
        alert("Submitted, thank you");
        console.log("submit", state);
        history.push({ pathname: "/" });
      } else {
        alert("Can not processed from, please fill the fields correctly!");
      }
    } else {
      alert("Can not processed from, please fill All the fields");
    }
  };

  //handle input and validations
  const formHandle = (input) => {
    setState({
      ...state,
      [input.target.name]: input.target.value,
    });

    //name validation
    if (input.target.name === "name") {
      let name = input.target.value;
      if (name.length === 0) {
        setError({
          ...err,
          name: "Empty name field, please enter your name.",
        });
      } else if (name.length < 3) {
        setError({
          ...err,
          name: "Invailed name, please enter your name correctly",
        });
      } else if (name.length >= 3) {
        setError({ ...err, name: "" });
      } else {
        console.log("error in name validation");
      }
    }
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
    //username validation
    if (input.target.name === "username") {
      let regex = new RegExp(/^[a-zA-Z0-9]{4,}$/);
      let username = input.target.value;
      if (username.length === 0) {
        setError({
          ...err,
          username: "Empty username field, please enter your username.",
        });
      } else if (!regex.test(username)) {
        setError({
          ...err,
          username: "Invailed username, please enter your username correctly",
        });
      } else if (regex.test(username)) {
        setError({ ...err, username: "" });
      } else {
        console.log("error in username validation");
      }
    }

    //password validation
    if (input.target.name === "password") {
      let regex = new RegExp(
        "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
      );
      let password = input.target.value;

      if (password.length === 0) {
        setError({
          ...err,
          password: "Empty password field, please enter your password.",
        });
      } else if (!regex.test(password)) {
        setError({
          ...err,
          password: "Invailed password, please enter your password correctly",
        });
      } else if (regex.test(password)) {
        setError({ ...err, password: "" });
      } else {
        console.log("error in password validation");
      }
    }

    //password validation
    if (input.target.name === "cpassword") {
      let cpassword = input.target.value;

      if (cpassword.length === 0) {
        setError({
          ...err,
          cpassword: "Please confirm your password.",
        });
      } else if (cpassword !== state.password) {
        setError({
          ...err,
          cpassword: "Doesn't match, please confirm your password correctly",
        });
      } else if (cpassword === state.password) {
        setError({ ...err, cpassword: "" });
      } else {
        console.log("error in cpassword validation");
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
        <TextHead title="Register form" color=" display-5 text-light" />
        <form className="m-5" onSubmit={(e) => submitHandle(e)}>
          <Input
            title="Name"
            name="name"
            type="text"
            inputHandle={(input) => formHandle(input)}
            errmsg={err.name}
            must
          />
          <Input
            title="Email"
            name="email"
            type="email"
            inputHandle={(input) => formHandle(input)}
            errmsg={err.email}
            must
          />
          <Input
            title="User Name"
            name="username"
            type="text"
            inputHandle={(input) => formHandle(input)}
            errmsg={err.username}
            must
          />
          <Input
            title="Password"
            name="password"
            type="password"
            inputHandle={(input) => formHandle(input)}
            errmsg={err.password}
            must
          />
          <Input
            title="Confirm Password"
            name="cpassword"
            type="password"
            inputHandle={(input) => formHandle(input)}
            errmsg={err.cpassword}
            must
          />
          <Button
            name="Register"
            type="submit"
            styling=" btn btn-dark btn-outline-light m-3"
          />
          <Link
            to="/login"
            className="float-end text-info"
            style={{ textDecoration: "none" }}
          >
            Already have account? Login
          </Link>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
