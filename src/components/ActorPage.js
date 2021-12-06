import React from 'react'

//REACT ROUTER
import {useParams} from 'react-router-dom'

//HOOK
import useActorFetch from '../hooks/useActorFetch';

//COMPONENTS
import ActorInfo from './ActorInfo';
import Spinner from './Spinner';

export const ActorPage = () => {

    const {actorId} = useParams();

    const {actor, error, loading} = useActorFetch(actorId);

  

    if (loading) return <Spinner/>;
    if (error) return <div>Something went wrong</div>;
    

    return (
        <div>
            <ActorInfo actor={actor}/>
          
        </div>
    )
}

export default ActorPage;