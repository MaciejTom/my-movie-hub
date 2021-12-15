import React, { useState, useEffect } from "react";

//STYLES
import { Wrapper, Content, Image, Poster } from "./ActorSlider.styles";

//ROUTER
import { Link } from "react-router-dom";

//COFIG
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../config";

//COMPONENTS
import Button from "../Button";

function ActorSlider({ images }) {
  const [index, setIndex] = useState(0);

  const [imgState, setImgState] = useState({ modal: false, imageSrc: "" });

  const getImg = (imgSrc) => {
    if (imgState.imageSrc) {
      setImgState({ modal: !imgState.modal, imageSrc: imgSrc.file_path });
    } else {
      setImgState({ modal: !imgState.modal, imageSrc: imgSrc.file_path });
    }
  };

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  return (
    <>
      <Wrapper>
        <div
          onClick={() => getImg("")}
          className={imgState.modal ? `modal open` : `modal`}
        >
          <img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${imgState.imageSrc}`} />
        </div>
        <div className="title">
          <h2>Image{images.length > 1 ? "s" : null}</h2>
        </div>
        <Content>
          {images.map((img, imgIndex) => {
            let position = "nextSlide";
            if (imgIndex === index) {
              position = "activeSlide";
            } else if (
              imgIndex === index - 1 ||
              (index === 0 && imgIndex === images.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <>
                <div key={img.id} className={`${position} imgDiv`}>
                  <Image
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${img.file_path}`}
                    onClick={() => getImg(img)}
                  />
                  {img.media.title ? (
                    <Link to={`/film/${img.media.id}`}>{img.media.title}</Link>
                  ) : (
                    <span>I'm sorry... we don't have this film</span>
                  )}
                </div>
              </>
            );
          })}
        </Content>
        {images.length > 1 && (
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
    </>
  );
}

export default ActorSlider;
