import { combineReducers } from "redux";
import { favorites } from "./favoriteReducer";
import { search } from "./searchReducer";
import { movies } from "./moviesReducer";
import { loading } from "./loader";

export default combineReducers({ favorites, search, movies, loading });
