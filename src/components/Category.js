import React, { useEffect, useState } from "react";
import { axiosSearch, getInstance } from "../network";
import MoviesList from "./MoviesList";
import TextHead from "./TextHead";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { receiveMoviesHandler } from "../actions";
import { connect } from "react-redux";

function Category(props) {
  const { name, type } = props;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const getCategory = () => {
    return getInstance.get(`/${type}`, { params: { page: page } });
  };

  useEffect(() => {
    if (name === "Search") {
      axiosSearch
        .get(`${type}&page=${page}`)
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    } else {
      props.dispatch(receiveMoviesHandler(getCategory, type));
    }
  }, [type, page, name]);

  const changePage = (e, newPage) => {
    setPage(newPage);
  };

  return (
    <div className=" shadow m-3">
      <TextHead title={name} color=" fs-5 text-light float-start" />
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
