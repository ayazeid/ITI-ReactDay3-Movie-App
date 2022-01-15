import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions";

export function favorites(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.movie];
    case REMOVE_FAVORITE:
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
}
