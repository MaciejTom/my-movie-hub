import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Image } from "./Thumb.styles";

export const Thumb = ({ image, movieID, clickable, actor }) => {
  
    
  return (
   <div>
      {clickable ? (
        <Link to={`/film/${movieID}`}>
       
          <Image actor={actor} src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image actor={actor} src={image} alt="movie-thumb" />
      )}

</div>
  );
};
Thumb.propTypes = {
  image: PropTypes.string,
  movieID: PropTypes.number,
  clickable: PropTypes.bool,

};

export default Thumb;
