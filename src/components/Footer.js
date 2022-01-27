import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../translatation/translation";

function Footer() {
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <>
      <Navbar sticky="bottom">
        <Container>
          <Link
            to="/"
            className="text-light"
            style={{ textDecoration: "none" }}
          >
            <Navbar.Brand className="text-info">
              {content[lang].brand}
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
