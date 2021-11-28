import React from 'react'

import {Image} from './Thumb.styles'

export const Thumb = ({image, movieID, clickable}) => {
    return (
        <div>
     <Image src={image} alt="movie-thumb"/>
        </div>
   
    )
}

export default Thumb;