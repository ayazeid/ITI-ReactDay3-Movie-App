import React, { useEffect, useState, useContext } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { search } from "../actions";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../translatation/translation";
import Button from "./Button";
import Input from "./Input";

function NavBar(props) {
  const { lang, setLang } = useContext(LanguageContext);
  const [searchInput, setInput] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const input = e.target.value;
    setInput(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(search(searchInput));
    history.push({ pathname: "/search" });
  };
  useEffect(() => {}, [searchInput]);

  const changeLang = () => {
    setLang((lang) => (lang === "en" ? "ar" : "en"));
  };
  return (
    <Navbar
      bg="dark"
      className="shadow"
      expand="lg"
      variant="dark"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container-fluid mx-2 ">
        <Link to="/" className="text-light" style={{ textDecoration: "none" }}>
          <Navbar.Brand className="text-info">
            {content[lang].brand}
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-3">
            <Link
              className="text-light "
              style={{ textDecoration: "none" }}
              to="/"
            >
              {content[lang].home}
            </Link>
          </Nav>
          <Nav className={lang === "ar" ? "me-3 ms-auto" : "me-auto ms-3"}>
            <Link
              className="text-light "
              style={{ textDecoration: "none" }}
              to="/favorites"
            >
              {content[lang].favorites}
            </Link>
          </Nav>
          <Form
            className="d-flex"
            onSubmit={(e) => handleSubmit(e)}
            style={{ alignItems: "center" }}
          >
            <Input
              name={content[lang].search}
              type="text"
              inputHandle={(e) => handleSearch(e)}
              styling=" p-0"
            />
            <Button
              name={content[lang].search}
              styling=" btn btn-dark text-info btn-sm m-1 p-1 "
            />
          </Form>
          <Nav>
            <Link
              className="text-light mx-5"
              style={{ textDecoration: "none", float: "right" }}
              to="/login"
            >
              {content[lang].login}
            </Link>
          </Nav>
          <Button
            name={lang}
            styling="btn btn-info btn-sm rounded-pill"
            onPress={() => changeLang()}
          />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
