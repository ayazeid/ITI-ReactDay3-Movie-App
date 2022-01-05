import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
});

export const apikey = process.env.REACT_APP_API_KEY;

export const imageBaseURL = "https://image.tmdb.org/t/p/w500/";
