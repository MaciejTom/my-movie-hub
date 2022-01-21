import React, { useState } from "react";

//Protypes
import PropTypes from "prop-types";
//Routing
import { Link } from "react-router-dom";
//Styles
import { Content, Film, ImageDiv, Text } from "./ActorFilms.styles";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//Components
import { Pagination } from "../Pagination";

export const ActorFilms = ({ films }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage, setFilmsPerPage] = useState(5);

  //Get current posts
  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

  return (
    <Content>
      <div className="title">
        <h2>Filmography</h2>
      </div>

      {currentFilms.map((film) => {
        return (
          <Film key={film.id}>
            <Link to={`/film/${film.id}`}>
              <ImageDiv img={film.backdrop_path}>
                {film.backdrop_path && (
                  <img
                    alt="photo-from-the-film"
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${film.backdrop_path}`}
                  />
                )}
              </ImageDiv>
              <Text>
                <h3>{film.title} </h3>
                <p>{film.overview.substring(0, 200)}...</p>
              </Text>
            </Link>
          </Film>
        );
      })}
      <Pagination
        filmsPerPage={filmsPerPage}
        totalFilms={films.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Content>
  );
};

ActorFilms.propTypes = {
  films: PropTypes.array,
};

export default ActorFilms;
