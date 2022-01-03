import React from "react";

//Proptypes
import PropTypes from "prop-types";
//Routing
import { Link } from "react-router-dom";
//Components
import { Image } from "./Thumb.styles";

export const Thumb = ({ image, movieID, clickable, actor, films }) => {
 
  return (
    <div>
      {clickable ? (
        <Link to={`/film/${movieID}`}>
          <Image actor={actor} src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image films={films} actor={actor} src={image} alt="movie-thumb" />
      )}
    </div>
  );
};
Thumb.propTypes = {
  image: PropTypes.string,
  movieID: PropTypes.number,
  clickable: PropTypes.bool,
  actor: PropTypes.bool,
  films: PropTypes.bool,
};

export default Thumb;
