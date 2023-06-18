import {
  ALL_MOVIES,
  ALL_MOVIES_REQUEST,
  ALL_MOVIES_ERROR,
  MOVIE_DETAILS,
} from "../actionTypes/moviesTypes";
const INITIAL_STATE = {
  movies: [],
  movieDetails: {},
  pageCount: 1,
  totalPageCount: 0,
  moviesLoading: false,
  moviesError: "",
};
export const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_MOVIES_REQUEST:
      return {
        ...state,
        moviesLoading: true,
      };
    case ALL_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        totalPageCount: action.payload.total_pages,
        pageCount: action.payload.page,
        moviesLoading: false,
      };
    case ALL_MOVIES_ERROR:
      return {
        ...state,
        moviesError: action.error,
        moviesLoading: false,
      };
    case MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
        moviesLoading: false,
      };
    default:
      return { ...state };
  }
};
