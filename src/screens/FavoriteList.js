import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import MoviesList from "../components/MoviesList";
import NavBar from "../components/NavBar";
import Note from "../components/Note";
import TextHead from "../components/TextHead";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../translatation/translation";

function FavoriteList(props) {
  const { movies } = props;
  const [favs, updateFavs] = useState([]);
  const { lang, setLang } = useContext(LanguageContext);
  useEffect(() => {
    updateFavs([...movies]);
  }, [movies]);

  return (
    <>
      <NavBar />
      <TextHead
        title={content[lang].favorites}
        color={
          lang === "ar"
            ? " fs-3 text-light text-end"
            : " fs-5 text-light text-start"
        }
      />
      {favs.length === 0 ? (
        <Note
          note={content[lang].favorite_note}
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
