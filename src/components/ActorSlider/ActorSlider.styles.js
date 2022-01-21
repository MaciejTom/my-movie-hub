import styled from "styled-components";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 1.3em;

  h2 {
    font-size: var(--fontBigger);
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
  margin: 1em auto 0;

  height: 460px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;

  .imgDiv {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;
    transition: var(--transition);
    background: var(--darkGrey);
    border-radius: 20px;
    width: max-content;
    padding: 5px;
    right: 0;
    cursor: pointer;
    margin: 0 auto;
  }

  .activeSlide {
    transform: translate(0);
    opacity: 1;
    max-width: 100%;
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
  a {
    color: var(--white);
    text-decoration: none;
  }
  span {
    color: var(--white);
  }
`;

export const Image = styled.img`
  height: 430px;
  display: block;
  border-radius: 20px;
  margin: 0 auto;
  max-width: 100%;
  object-fit: cover;
`;

export const RightBtn = styled(BsFillArrowRightCircleFill)``

export const LeftBtn = styled(BsFillArrowLeftCircleFill)``
export const Buttons = styled.div`
display: flex;
justify-content: center;
padding: 1em;
column-gap: 1em;
`