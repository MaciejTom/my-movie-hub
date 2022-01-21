import styled from "styled-components";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"

export const Wrapper = styled.section`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 1.3em;

  h2 {
    font-size: var(--fontBigger);
    color: var(--medGrey);

    @media (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }

  .buttons {
    display: flex;
    justify-content: center;

    button {
      display: inline-block;
      margin: 1.3em;
    }
  }
`;
export const Content = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;

  @media (max-width: 500px) {
    height: 350px;
  }

  .film {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: 1s;
  }

  .activeSlide {
    transform: translate(0);
    opacity: 1;
  }
  .nextSlide {
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
  }
  .lastSlide {
    transform: translateX(-100%);
    opacity: 0;
    pointer-events: none;
  }
`;

export const Film = styled.div``;
export const RightBtn = styled(BsFillArrowRightCircleFill)``

export const LeftBtn = styled(BsFillArrowLeftCircleFill)``
export const Buttons = styled.div`
display: flex;
justify-content: center;
padding: 1em;
column-gap: 1em;`