import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;

  h2 {
    font-size: var(--fontBigger);
  }

  .buttons {
    display: flex;
    justify-content: center;

    button {
      display: inline-block;
      margin: 20px;
    }
  }
  .modal {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
  }
  .modal.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  .modal img {
    width: auto;
    max-height: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    padding: 20px;
    margin: 0 auto;
  }
`;
export const Content = styled.div`
  margin: 4rem auto 0;

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

    margin: 0 auto;
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
`;
export const Poster = styled.div``;
