import React, { useState, useEffect } from "react";

//Proptypes
import PropTypes from "prop-types";
//Components
import Button from "../Button";
import { StyledModal } from "../Modal/Modal.styles";
//Styles
import {
  Wrapper,
  Content,
  Image,
  LeftBtn,
  RightBtn,
  Buttons,
} from "./ActorSlider.styles";
//Routing
import { Link } from "react-router-dom";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

const ActorSlider = ({ images }) => {
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
        <StyledModal getImg={getImg} imgState={imgState} />

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
              <div key={img.id} className={`${position} imgDiv`}>
                <Image
                  src={`${IMAGE_BASE_URL}${POSTER_SIZE}${img.file_path}`}
                  onClick={() => getImg(img)}
                />
                {img.media.title ? (
                  <Link to={`/film/${img.media.id}`}>
                    {img.media.title.length > 38
                      ? img.media.title.substring(0, 38) + "..."
                      : img.media.title}
                  </Link>
                ) : (
                  <span>I'm sorry... we don't have this film</span>
                )}
              </div>
            );
          })}
        </Content>
        {images.length > 1 && (
          <Buttons>
            <LeftBtn size="30px" onClick={() => setIndex(index - 1)} />
            <RightBtn size="30px" onClick={() => setIndex(index + 1)} />
          </Buttons>
        )}
      </Wrapper>
    </>
  );
};

ActorSlider.propTypes = {
  images: PropTypes.array,
};

export default ActorSlider;
