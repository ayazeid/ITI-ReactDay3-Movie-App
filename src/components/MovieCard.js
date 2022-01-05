import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imageBaseURL } from "../network";

function MovieCard(props) {
  const [hover, sethover] = useState(false);
  const { movie } = props;
  return (
    <Card
      style={{ width: "18rem", margin: "2rem", padding: 0, border: "none" }}
      className="bg-transparent bg-gradient shadow"
    >
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
        <Card.Img
          className="img-fluid"
          variant="top"
          src={imageBaseURL + movie.poster_path}
          style={{ height: 300 }}
          onMouseOver={() => sethover(true)}
          onMouseOut={() => sethover(false)}
        />
        <Card.Body>
          <Card.Text className="text-light text-start">{movie.title}</Card.Text>
          {hover && (
            <Card.Text className="card-img-overlay text-light mt-3 text-center bg-gradient ">
              {movie.overview.substr(0, 100)}..
            </Card.Text>
          )}
        </Card.Body>
      </Link>
    </Card>
  );
}

export default MovieCard;
