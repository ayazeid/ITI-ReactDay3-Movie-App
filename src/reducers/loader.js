import { LOADING } from "../actions";

export function loading(state = true, action) {
  switch (action.type) {
    case LOADING:
      return action.load;
    default:
      return state;
  }
}
