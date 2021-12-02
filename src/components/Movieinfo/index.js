import React from "react";
import PropTypes from "prop-types";

//COMPONENTS
import Thumb from "../Thumb";

//IMAGE
import NoImage from "../../images/no-image.jpg";

//STYLES
import { Wrapper, Content, Text, Rating, Directors } from "./Movieinfo.styles";

//COFIG
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

const Movieinfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
    {console.log(`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`)}

        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
  
          <div className='rating-directors'>
            <div>
              <h3>RATING</h3>
              <div className='score'>{movie.vote_average}</div>
            </div>
            <div className='director'>
              <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
              {movie.directors.map(director => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );

  Movieinfo.propTypes = {
    movie: PropTypes.object,
  
};

export default Movieinfo;
