import { SEARCH } from "../actions";

export function search(state = "", action) {
  switch (action.type) {
    case SEARCH:
      return (state = action.query);
    default:
      return state;
  }
}
