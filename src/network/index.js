import axios from "axios";

//movies api
export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
});

export const apikey = process.env.REACT_APP_API_KEY;

export const imageBaseURL = "https://image.tmdb.org/t/p/w500/";

//search api
export const axiosSearch = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=`,
});
