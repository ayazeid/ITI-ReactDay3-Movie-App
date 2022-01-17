import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { getInstance } from "../network";
import { Col, Container, Row } from "react-bootstrap";
import Image from "../components/Image";
import Description from "../components/Description";
import { connect } from "react-redux";

function Movie(props) {
  const { id } = props.match.params;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getInstance
      .get(`/${id}`)
      .then((res) => {
        setMovie(
          props.location.state
            ? { ...res.data, ...props.location.state }
            : res.data
        );
      })
      .catch((err) => console.log(err));
  }, [id, props]);
  return (
    <>
      <NavBar />
      <Container className="shadow mt-5 p-4 ">
        <Row lg={2} sm={1} xs={1}>
          <Col>
            <Image poster={movie.poster_path} />
          </Col>
          <Col>
            <Description movie={movie} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default connect(({ movies }) => {
  return { movies };
})(Movie);
