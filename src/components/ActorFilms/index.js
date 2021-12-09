import React, {useState} from "react";
import { Link } from "react-router-dom";

import {
  Wrapper,
  Content,
  Film,
  ImageDiv,
  Title,
  Desc,
  Text,
 
} from "./ActorFilms.styles";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import {Pagination} from '../Pagination';

export const ActorFilms = ({ films }) => {
  
    
    const [currentPage, setCurrentPage] = useState(1);
    const [filmsPerPage, setFilmsPerPage] = useState(5);

    //Get current posts

    const indexOfLastFilm = currentPage * filmsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
    const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

  return (
    <Wrapper>
      <Content>
        {currentFilms.map((film) => {
          return (
            <Film key={film.id}>
              <Link  to={`/film/${film.id}`}>
                <ImageDiv>
                  {film.backdrop_path && (
                    <img
                      src={`${IMAGE_BASE_URL}${POSTER_SIZE}${film.backdrop_path}`}
                    />
                  )}
                </ImageDiv>
                <Text>
                  <Title>{film.title} </Title>
                  <Desc>{film.overview.substring(0, 200)}...</Desc>
                </Text>
              </Link>
            </Film>
          );
        })}
        <Pagination filmsPerPage={filmsPerPage} totalFilms={films.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </Content>
    </Wrapper>
  );
};
export default ActorFilms;
