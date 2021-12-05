import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {Wrapper, Image} from './Actor.styles'

export const Actor = ({name, character, imageUrl, id}) => {
  
    return (
       <Wrapper>
          <Link to={`/actor/${id}`}>
           <Image src={imageUrl} alt="actor-thumb"/>
           <h3>{name}</h3>
           <p>{character}</p>
           </Link>
       </Wrapper>
    )
}

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string
}
export default Actor;