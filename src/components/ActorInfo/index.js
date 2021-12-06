import React, { useState } from "react";

//COMPONENTS
import Thumb from "../Thumb";

//IMAGE
import NoImage from "../../images/no-image.jpg";

//STYLES
import { Wrapper, Content, Text } from "./ActorInfo.styles";

//COFIG
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

const ActorInfo = ({ actor }) => {
  const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <Wrapper>
      <Content>
        <Thumb
          actor={true}
          image={
            actor.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{actor.name}</h1>
          <h3>Biography</h3>
          <p>
            {actor.biography.length > 200
              ? isBioOpen
                ? actor.biography
                : actor.biography.substring(0, 200)
              : actor.biography}
            {actor.biography.length > 200 && (
              <button onClick={() => setIsBioOpen((prev) => !prev)}>
                {isBioOpen ? "Show less" : "Read more"}
              </button>
            )}
          </p>
          {actor.birthday && (
            <>
              <h4>Info</h4>
              <div>
                Born: {actor.birthday} {actor.place_of_birth && `in ${actor.place_of_birth}`}
              </div>

              {actor.deathday && <div>Died: {actor.deathday}</div>}
            </>
          )}
        </Text>
      </Content>
    </Wrapper>
  );
};

export default ActorInfo;
