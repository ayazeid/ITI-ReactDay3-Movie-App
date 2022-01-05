import React, { useState } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
function NavBar(props) {
  const [searchInput, setInput] = useState("");
  const handleSearch = (e) => {
    const input = e.target.value;
    setInput(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(searchInput);
  };
  return (
    <Navbar bg="dark" className="shadow" expand="lg" variant="dark">
      <div className="container-fluid mx-2 ">
        <Link to="/" className="text-light" style={{ textDecoration: "none" }}>
          <Navbar.Brand>Movies Night</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-between">
            <Link
              className="text-light mx-5"
              style={{ textDecoration: "none" }}
              to="/"
            >
              HOME
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
            <Input
              name="search"
              type="text"
              inputHandle={(e) => handleSearch(e)}
            />
            <Button name="Search" styling=" btn btn-dark btn-outline-info" />
          </Form>
          <Nav>
            <Link
              className="text-light mx-5"
              style={{ textDecoration: "none", float: "right" }}
              to="/login"
            >
              LOGIN
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavBar;
