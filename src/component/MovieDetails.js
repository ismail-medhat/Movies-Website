import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { imageBaseUrl } from "../constant";
import { Link, useParams } from "react-router-dom";
import { baseUrl, apiKey } from "../constant";
import axios from "axios";
import moviePlaceHolderImg from "../images/1.jpg";
import loadingImg from "../images/load3.gif";
import Carousel from "react-bootstrap/Carousel";

const MovieDetails = () => {
  const movieParams = useParams();
  const [movieDetails, setMovieDetails] = useState("");
  const [loading, setLoading] = useState(false);
  // get  movie details by axios
  const getMovieDetails = async () => {
    await setLoading(true);
    const res = await axios.get(
      `${baseUrl}/movie/${movieParams.id}?api_key=${apiKey}&language=en`
    );
    console.log(" movieDetails : ", res.data);
    await setMovieDetails(res.data);
    await setLoading(false);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div>
      <h2 className="text-center">Movie Details</h2>
      {loading ? (
        <div className="d-flex justify-content-center m-5">
          <img
            src={loadingImg}
            style={{ width: "100px", height: "100px" }}
            alt="Movie Poster"
          />
        </div>
      ) : (
        <div className="movieDetailsContainer row">
          <div className="poster col-lg-4 col-sm-12">
            <img
              src={
                movieDetails.poster_path
                  ? imageBaseUrl + movieDetails.poster_path
                  : moviePlaceHolderImg
              }
              alt="Movie Poster"
            />
          </div>

          <div className="details col-lg-7 col-sm-12 mt-4">
            <h1 className="title">{movieDetails.original_title}</h1>
            <h2 className="director">{movieDetails.overview}</h2>
            <p className="plot">Release Date : {movieDetails.release_date}</p>
            <div className="row">
              <div className="reviews col-lg-4 col-sm-12">
                <h3>Reviews</h3>
                <p>Vote Count : {movieDetails.vote_count}</p>
                <p>Movie Rate : {movieDetails.vote_average}</p>
              </div>
              {movieDetails.production_companies?.length > 0 && (
                <div className="reviews col-lg-8 col-sm-12">
                  <h3>Production Companies</h3>

                  <Carousel variant="dark" className="w-75 my-4">
                    {movieDetails?.production_companies?.map((pc) => {
                      return (
                        <Carousel.Item key={pc.id}>
                          <img
                            className="d-block w-100"
                            src={
                              pc.logo_path
                                ? imageBaseUrl + pc.logo_path
                                : moviePlaceHolderImg
                            }
                            style={{ height: "80px" }}
                            alt="First slide"
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </div>
              )}
            </div>

            <Row>
              <Col md="10" xs="12" sm="12" className="my-2">
                <Link to={"/"}>
                  <Button className="btn btn-primary">
                    Go Back To Home Page
                  </Button>
                </Link>
                <a href={movieDetails?.homepage} target="_blank">
                  <Button className="btn btn-success m-2">
                    Watching Movie
                  </Button>
                </a>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
