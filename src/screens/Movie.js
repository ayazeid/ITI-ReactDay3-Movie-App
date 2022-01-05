import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { axiosInstance, apikey } from "../network";
import { Col, Container, Row } from "react-bootstrap";
import Image from "../components/Image";
import Description from "../components/Description";

function Movie(props) {
  const { id } = props.match.params;
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axiosInstance
      .get(`${id}?api_key=${apikey}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <NavBar />
      <Container className="shadow mt-5 p-4 ">
        <Row>
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

export default Movie;
