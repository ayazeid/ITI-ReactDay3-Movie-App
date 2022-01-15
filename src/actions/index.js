// //action types
// export const ADD_FAVORITE = "ADD_FAVORITE";
// export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
// export const SEARCH = "SEARCH";

// //action creators
// export const addFavorite = (movie) => {
//   return {
//     type: ADD_FAVORITE,
//     movie,
//   };
// };

// export const removeFavorite = (id) => {
//   return {
//     type: REMOVE_FAVORITE,
//     id,
//   };
// };

// //search action
// export const search = (query) => {
//   return {
//     type: SEARCH,
//     query,
//   };
// };

import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  addFavorite,
  removeFavorite,
} from "./favorite";
import { SEARCH, search } from "./search";
import {
  RECEIVE_MOVIES,
  receiveMoviesHandler,
  setLoading,
  LOADING,
} from "./movies";
export {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  addFavorite,
  removeFavorite,
  SEARCH,
  search,
  RECEIVE_MOVIES,
  receiveMoviesHandler,
  setLoading,
  LOADING,
};
