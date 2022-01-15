import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

function MoviesList(props) {
  const { movies, basket, search } = props;
  const [list, setlist] = useState([]);
  useEffect(() => {
    if (!props.loading) {
      setlist((list) => {
        if (props.list !== undefined && props.list !== "undefined") {
          return props.list.movies;
        } else {
          return list;
        }
      });
    }
  }, [props.list, props.loading]);
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
        ) : search ? (
          <Row md={5}>
            {movies.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </Row>
        ) : (
          <Row md={5}>
            {list.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </Row>
        )}
      </div>
    </>
  );
}

export default connect(({ movies, loading }, props) => {
  return {
    list: movies[props.type],
    loading,
  };
})(MoviesList);
