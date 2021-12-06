import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import useActorFetch  from '../../hooks/useActorFetch'
 
import { Wrapper, Image } from "./Actor.styles";

export const Actor = ({ name, character, imageUrl, id }) => {
  const { actor } = useActorFetch(id);

  return (
    <Wrapper>
      {actor.biography ? (
        <Link to={`/actor/${id}`}>
          <Image src={imageUrl} alt="actor-thumb" />
          <h3>{name}</h3>
          <p>{character}</p>
        </Link>
      ) : (
        <>
          <Image src={imageUrl} alt="actor-thumb" />
          <h3>{name}</h3>
          <p>{character}</p>
        </>
      )}
    </Wrapper>
  );
};

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default Actor;
