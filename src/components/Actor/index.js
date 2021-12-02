import React from 'react'

import {Wrapper, Image} from './Actor.styles'

export const Actor = ({name, character, imageUrl}) => {
    console.log(name);
    return (
       <Wrapper>
          
           <Image src={imageUrl} alt="actor-thumb"/>
           <h3>{name}</h3>
           <p>{character}</p>
       </Wrapper>
    )
}
export default Actor;