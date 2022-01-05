import React, { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import NavBar from "../components/NavBar";
import { axiosInstance, apikey } from "../network/index";

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`popular?api_key=${apikey}&language=en-US&page=1`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchHandle = (keyword) => {
    //todo handle search
  };

  return (
    <>
      <NavBar search={(keyword) => searchHandle(keyword)} />
      <MoviesList movies={movies} />
    </>
  );
}

export default Home;
