import React, { useEffect, useState, useContext } from "react";
import { axiosSearch, getInstance } from "../network";
import MoviesList from "./MoviesList";
import TextHead from "./TextHead";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { receiveMoviesHandler } from "../actions";
import { connect } from "react-redux";
import { LanguageContext } from "../context/LanguageContext";
import { content } from "../translatation/translation";
function Category(props) {
  const { name, type } = props;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { lang, setLang } = useContext(LanguageContext);

  const [language, setLanguage] = useState("en-us");
  const getCategory = () => {
    return getInstance.get(`/${type}`, {
      params: { page: page, language: language },
    });
  };

  useEffect(() => {
    setLanguage(lang === "ar" ? "ar-eg" : "en-us");
    if (name === "Search") {
      axiosSearch
        .get("movie", {
          params: {
            query: type,
            page: page,
            language: lang === "ar" ? "ar-eg" : "en-us",
          },
        })
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    } else {
      props.dispatch(receiveMoviesHandler(getCategory, type));
    }
  }, [type, page, name, lang, language]);

  const changePage = (e, newPage) => {
    setPage(newPage);
  };

  return (
    <div className=" shadow m-auto">
      <TextHead
        title={content[lang][type]}
        color={
          lang === "ar"
            ? " fs-3 text-light text-end"
            : " fs-5 text-light text-start"
        }
      />
      <MoviesList
        movies={movies}
        type={type}
        search={name === "Search" ? true : false}
      />
      <Stack spacing={2} style={{ margin: "auto", padding: "1rem" }}>
        <Pagination count={10} color="info" page={page} onChange={changePage} />
      </Stack>
    </div>
  );
}

export default connect()(Category);
