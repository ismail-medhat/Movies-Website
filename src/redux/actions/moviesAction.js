import axios from "axios";
import { baseUrl } from "../../constant";
import { apiKey } from "../../constant";
import {
  ALL_MOVIES,
  ALL_MOVIES_REQUEST,
  ALL_MOVIES_ERROR,
  MOVIE_DETAILS,
} from "../actionTypes/moviesTypes";

export const getAllMovies = (page) => {
  return async (dispatch) => {
    dispatch({ type: ALL_MOVIES_REQUEST });
    await axios
      .get(
        `${baseUrl}/movie/popular?api_key=${apiKey}&language=en&page=${page}`
      )

      .then((response) => {
        console.log("getAllMovies :: ", response.data);
        return dispatch({ type: ALL_MOVIES, payload: response.data });
      })
      .catch((error) => {
        console.error(error);
        return dispatch({ type: ALL_MOVIES_ERROR, error: error });
      });
  };
};

export const searchOnMovies = (page, searchKey) => {
  return async (dispatch) => {
    dispatch({ type: ALL_MOVIES_REQUEST });
    await axios
      .get(
        `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchKey}&language=en&page=${page}`
      )
      .then((response) => {
        console.log("searchOnMovies :: ", response.data);
        return dispatch({ type: ALL_MOVIES, payload: response.data });
      })
      .catch((error) => {
        console.error(error);
        return dispatch({ type: ALL_MOVIES_ERROR, error: error });
      });
  };
};

export const getMovieDetails = (movieId) => {
  return async (dispatch) => {
    dispatch({ type: ALL_MOVIES_REQUEST });
    await axios
      .get(`${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=en`)
      .then((response) => {
        return dispatch({ type: MOVIE_DETAILS, payload: response.data });
      })
      .catch((error) => {
        console.error(error);
        return dispatch({ type: ALL_MOVIES_ERROR, error: error });
      });
  };
};
