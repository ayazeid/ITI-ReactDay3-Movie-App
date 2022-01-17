import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { imageBaseURL } from "../network";
import Icon from "./Icon";
import { addFavorite, removeFavorite } from "../actions";
import { connect } from "react-redux";

function MovieCard(props) {
  const [hover, sethover] = useState(false);
  const [fav, setFave] = useState(false);
  const { movie, dispatch, state, basket } = props;

  //to save the star check
  useEffect(() => {
    if (state.filter((m) => m.id === movie.id).length !== 0) {
      setFave(true);
    }
  }, [fav, movie.id, state]);

  //add and remove from fav
  const toggler = (e) => {
    //debugger;
    //dispatch this movie to the state
    if (fav) {
      dispatch(removeFavorite(movie.id));
      setFave(false);
    } else if (!fav) {
      dispatch(addFavorite(movie));
      setFave(true);
    }
  };

  return (
    <Card
      style={{
        width: 200,
        maxHeight: "fit-content",
        margin: "2rem",
        padding: 0,
        border: "none",
      }}
      className="bg-transparent bg-gradient shadow"
      onMouseOver={() => sethover(true)}
      onMouseOut={() => sethover(false)}
    >
      {basket ? (
        <Icon
          styling="card-img-overlay  "
          name={"delete"}
          toggle={(e) => toggler(e)}
        />
      ) : (
        <Icon
          styling="card-img-overlay  "
          color="#fbc107"
          name={fav ? "star" : "unstar"}
          toggle={(e) => toggler(e)}
        />
      )}
      <Link
        to={{ pathname: `/movie/${movie.id}`, state: movie }}
        style={{ textDecoration: "none" }}
      >
        <Card.Img
          className="img-fluid"
          variant="top"
          src={imageBaseURL + movie.poster_path}
          style={{ height: 200, width: 200 }}
        />
        <Card.Body>
          <Card.Text className="text-light text-start  ">
            {movie.title}
          </Card.Text>

          {hover && (
            <Card.Text
              className="card-img-overlay text-light  text-center bg-gradient "
              style={{ height: 100, marginTop: 50 }}
            >
              {movie.overview.substr(0, 100)}..
            </Card.Text>
          )}
        </Card.Body>
      </Link>
    </Card>
  );
}

export default connect(({ favorites }) => {
  return { state: favorites };
})(MovieCard);
