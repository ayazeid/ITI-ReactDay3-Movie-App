import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MoviesList from "../components/MoviesList";
import NavBar from "../components/NavBar";
import Note from "../components/Note";
import TextHead from "../components/TextHead";
function FavoriteList(props) {
  const { movies } = props;
  const [favs, updateFavs] = useState([]);

  useEffect(() => {
    updateFavs(
      movies.filter((movie, i) => {
        return movies.indexOf(movie) === i;
      })
    );
  }, [movies]);

  return (
    <>
      <NavBar />
      <TextHead title="Favorites" color=" fs-5 text-light float-start" />
      {favs.length === 0 ? (
        <Note
          note="Still don't have favorites!!"
          styling=" bg-primary bg-info text-dark "
        />
      ) : (
        <MoviesList movies={favs} basket />
      )}
    </>
  );
}

export default connect(({ favorites }) => {
  return {
    movies: favorites,
  };
})(FavoriteList);
