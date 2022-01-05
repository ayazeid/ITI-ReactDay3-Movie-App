import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
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
