import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import TextHead from "./TextHead";
function MoviesList(props) {
  const { movies } = props;
  return (
    <>
      <TextHead title="Trending" color=" text-light float-start" />
      <div
        className="container-fluid "
        style={{ justifyContent: "center", margin: "auto", padding: 70 }}
      >
        <Row md={5}>
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </Row>
      </div>
    </>
  );
}

export default MoviesList;
