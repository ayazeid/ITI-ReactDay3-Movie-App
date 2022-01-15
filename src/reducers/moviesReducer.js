import { RECEIVE_MOVIES } from "../actions";

export function movies(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return {
        ...state,
        [action.movies.category]: {
          page: action.movies.page,
          movies: action.movies.movies,
        },
      };
    default:
      return state;
  }
}
