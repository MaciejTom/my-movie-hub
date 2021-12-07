import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;

  h1 {
    padding-left: 20px;
    color: var(--medGrey);
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
    transition: opacity .4s ease, visibility .4s ease, transform .5s ease-in-out;
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
  margin: 0 auto;
  width: 80vw;
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
  @media (max-width: 350px) {
    height: 350px;
  }

  .imgDiv {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: 1s;
    display: block;
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

export const Image = styled.img`
  height: 100%;
  display: block;
  text-align: center;
  margin: 0 auto;
`;
