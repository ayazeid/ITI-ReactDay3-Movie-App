import React, { useEffect, useState } from "react";
import { axiosInstance, apikey, axiosSearch } from "../network";
import MoviesList from "./MoviesList";
import TextHead from "./TextHead";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Category(props) {
  const { name, type } = props;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (name === "Search") {
      axiosSearch
        .get(`${type}&page=${page}`)
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    } else {
      axiosInstance
        .get(`${type}?api_key=${apikey}&language=en-US&page=${page}`)
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [type, page, name]);

  const changePage = (e, newPage) => {
    setPage(newPage);
  };
  return (
    <div className=" shadow m-3">
      <TextHead title={name} color=" fs-5 text-light float-start" />
      <MoviesList movies={movies} />
      <Stack spacing={2} style={{ margin: "auto", padding: "1rem" }}>
        <Pagination count={10} color="info" page={page} onChange={changePage} />
      </Stack>
    </div>
  );
}

export default Category;
