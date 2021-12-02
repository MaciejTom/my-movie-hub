import React from "react";

import { Link } from "react-router-dom";

import { Image } from "./Thumb.styles";

export const Thumb = ({ image, movieID, clickable }) => {
 
    
  return (
   <div>
      {clickable ? (
        <Link to={`/${movieID}`}>
       
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}

</div>
  );
};

export default Thumb;
