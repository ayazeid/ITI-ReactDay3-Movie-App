import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
function MoviesList(props) {
  const { movies, basket } = props;
  return (
    <>
      <div
        className="container-fluid"
        style={{ justifyContent: "center", margin: "auto", padding: 70 }}
      >
        {basket ? (
          <Row md={5}>
            {movies.map((m) => (
              <MovieCard key={m.id} movie={m} basket />
            ))}
          </Row>
        ) : (
          <Row md={5}>
            {movies.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </Row>
        )}
      </div>
    </>
  );
}

export default MoviesList;
