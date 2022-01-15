//imports
import { showLoading, hideLoading } from "react-redux-loading";

//action types
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const LOADING = "LOADING";
//action creators
export const receiveMovies = (movies) => {
  return {
    type: RECEIVE_MOVIES,
    movies,
  };
};
export const setLoading = (load) => {
  return {
    type: LOADING,
    load,
  };
};

//event handler
export const receiveMoviesHandler = (getCategory, name) => {
  return (dispatch) => {
    getCategory().then((res) => {
      dispatch(showLoading());
      dispatch(setLoading(true));
      dispatch(
        receiveMovies({
          category: name,
          page: res.data.page,
          movies: res.data.results,
        })
      );
      dispatch(setLoading(false));
      dispatch(hideLoading());
    });
  };
};
