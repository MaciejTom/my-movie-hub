import React, { useState, useEffect } from "react";

//Proptypes
import PropTypes from "prop-types";
//Routing
import { Link } from "react-router-dom";
//Styles
import { Wrapper, Content, Section, Text } from "./HeroSlider.styles";
//Config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";
//Components
import Button from "../Button";

export const HeroSlider = ({ threeTopFilms, loading }) => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      if (index >= threeTopFilms.length - 1) {
        setIndex(-1);
      }
      setIndex((prev) => prev + 1);
    }, 8000);
    return () => clearInterval(sliderTimer);
  }, [index]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <Section>
      {threeTopFilms.map((film, filmIndex) => {
        let position = "translateX(100%)";
        let opacity = "0";
        if (filmIndex === index) {
          position = "translateX(0)";
          opacity = "1";
        }
        if (
          filmIndex === index - 1 ||
          (index === 0 && filmIndex === threeTopFilms.length - 1)
        ) {
          position = "translateX(-100%)";
          opacity = "0";
        }

        return (
          <Wrapper
            key={film.id}
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${film.backdrop_path}`}
            position={position}
            opacity={opacity}
          >
            <Content>
              <Text>
                <h1>{film.title}</h1>
                <p>{film.overview}</p>
                <Link to={`/film/${film.id}`}>
                  <Button size="small" text="Read more" />
                </Link>
              </Text>
            </Content>
          </Wrapper>
        );
      })}
    </Section>
  );
};

HeroSlider.propTypes = {
  threeTopFilms: PropTypes.array,
  loading: PropTypes.bool,
};

export default HeroSlider;
