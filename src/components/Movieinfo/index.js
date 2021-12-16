import React from "react";

//Proptypes
import PropTypes from "prop-types";
//Components
import Thumb from "../Thumb";
//Images
import NoImage from "../../images/no-image.jpg";
//Styles
import { Wrapper, Content, Text, Rating, Directors } from "./Movieinfo.styles";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

const Movieinfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
        actor={false}
      />
      <Text>
        <h1>{movie.title}</h1>
        <h2>PLOT</h2>

        <p>{movie.overview}</p>

        <Rating>
          <div>
            <h3>RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <Directors>
            <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
            {movie.directors.map((director) => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </Directors>
        </Rating>
      </Text>
    </Content>
  </Wrapper>
);

Movieinfo.propTypes = {
  movie: PropTypes.object,
};

export default Movieinfo;
