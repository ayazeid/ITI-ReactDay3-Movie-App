//action types
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SEARCH = "SEARCH";

//action creators
export const addFavorite = (movie) => {
  return {
    type: ADD_FAVORITE,
    movie,
  };
};

export const removeFavorite = (id) => {
  return {
    type: REMOVE_FAVORITE,
    id,
  };
};

//search action
export const search = (query) => {
  return {
    type: SEARCH,
    query,
  };
};
