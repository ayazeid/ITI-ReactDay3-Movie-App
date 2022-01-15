//action types
export const SEARCH = "SEARCH";

//search action
export const search = (query) => {
  return {
    type: SEARCH,
    query,
  };
};
