import { Container } from "react-bootstrap";
import NavBar from "./component/navBar";
import MoviesList from "./component/moviesList";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";
import { getAllMovies, searchOnMovies } from "./redux/actions/moviesAction";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const dispatch = useDispatch();
  const { movies, pageCount, totalPageCount } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    if (searchKey) {
      dispatch(searchOnMovies(page, searchKey));
    } else {
      dispatch(getAllMovies(page));
    }
  }, [searchKey, page]);

  useEffect(() => {
    setAllMovies(movies);
    setPage(pageCount);
    setTotalPage(totalPageCount);
  }, [movies]);

  return (
    <div className="font color-body">
      <NavBar searchKey={searchKey} setSearchKey={setSearchKey} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={allMovies}
                  setPage={setPage}
                  totalPage={totalPage}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
