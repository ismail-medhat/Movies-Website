import React from "react";
import unavailableImage from "../images/unavailable.png";

const MovieUnavailable = () => {
  return (
    <div className="unavailable">
      <img src={unavailableImage} alt="Movie Unavailable" />
      <h2>We're sorry, this movie is unavailable.</h2>
      <p>
        Please check back later, search to a different movie or try to reload
        page.
      </p>
    </div>
  );
};

export default MovieUnavailable;
