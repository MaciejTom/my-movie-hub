import React from 'react'
import {useParams} from 'react-router-dom'
export const ActorPage = () => {

    const {actorId} = useParams();
    return (
        <div>
            {actorId}
        </div>
    )
}

export default ActorPage;