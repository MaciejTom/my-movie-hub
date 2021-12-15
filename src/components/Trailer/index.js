import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Wrapper, Content } from "./Trailer.styles";
import Button from "../Button";

function Trailer({ trailers }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = trailers.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, trailers]);

  return (
    <Wrapper>
      <div className="title">
        <h2>Trailer{trailers.length > 1 ? "s" : null}</h2>
      </div>
      <Content>
        {trailers.map((trailer, trailerIndex) => {
          let position = "nextSlide";
          if (trailerIndex === index) {
            position = "activeSlide";
          } else if (
            trailerIndex === index - 1 ||
            (index === 0 && trailerIndex === trailers.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <iframe
            key={trailer.id}
              className={`${position} film`}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          );
        })}
      </Content>
      {trailers.length > 1 && (
        <div className="buttons">
          <Button
            text="Prev"
            size="small"
            callback={() => setIndex(index - 1)}
          />
          <Button
            text="Next"
            size="small"
            callback={() => setIndex(index + 1)}
          />
        </div>
      )}
    </Wrapper>
  );
}
Trailer.propTypes = {
  trailers: PropTypes.array,
  
};

export default Trailer;
