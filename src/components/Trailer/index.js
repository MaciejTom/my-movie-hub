// import React, { useState, useEffect } from "react";

// const Trailer = ({ trailers }) => {

//   return (
//     <div>
//       <iframe
//         width="560"
//         height="315"
//         src={`https://www.youtube.com/embed/${trailers[0].key}`}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default Trailer;

import React, { useState, useEffect } from "react";

import { Wrapper, Content, Film } from "./Trailer.styles";
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
        <h1>Trailer{trailers.length > 1 ? "s" : null}</h1>
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
              class={`${position} film`}
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
        <div class="buttons">
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

export default Trailer;
