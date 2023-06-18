import React from "react";
import { Col } from "react-bootstrap";
import { imageBaseUrl } from "../constant";
import { Link } from "react-router-dom";
import moviePlaceHolderImg from "../images/1.jpg";

const CardMovie = ({ mov }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img
            src={
              mov.poster_path
                ? imageBaseUrl + mov.poster_path
                : moviePlaceHolderImg
            }
            alt="Image"
          />
          <div className="overlay">
            <h2>Movie Details</h2>
            <p>
              Movie Name :{" "}
              {mov.original_title.length > 22
                ? `${mov.original_title.substring(0, 23)}...`
                : mov.original_title}
            </p>
            <p>Release Date : {mov.release_date}</p>
            <p>Vote Count : {mov.vote_count}</p>
            <p>Movie Rate : {mov.vote_average}</p>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
