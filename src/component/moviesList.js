import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./MovieCard";
import MovieUnavailable from "./moviesUnavailable";
import MoviePagination from "./moviesPagination";

const MoviesList = ({ movies, setPage, totalPage }) => {
  // search movies by axios
  const handlePageClick = (currentPage) => {
    console.log("currentPage : ", currentPage.selected + 1);
    setPage(currentPage.selected + 1);
  };

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        <React.Fragment>
          {movies.map((movie) => {
            return <CardMovie key={movie.id} mov={movie} />;
          })}
          <MoviePagination
            pageCount={totalPage}
            handlePageClick={handlePageClick}
          />
        </React.Fragment>
      ) : (
        <MovieUnavailable />
      )}
    </Row>
  );
};

export default MoviesList;
