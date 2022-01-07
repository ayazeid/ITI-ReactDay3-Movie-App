import { combineReducers } from "redux";
import { ADD_FAVORITE, REMOVE_FAVORITE, SEARCH } from "../actions";

function favorites(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.movie];
    case REMOVE_FAVORITE:
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
}

function search(state = "", action) {
  switch (action.type) {
    case SEARCH:
      return (state = action.query);
    default:
      return state;
  }
}

export default combineReducers({ favorites, search });
