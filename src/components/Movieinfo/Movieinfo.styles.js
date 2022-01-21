import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";

export const Wrapper = styled.section`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 2.5em 1.3em;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 1.3em 2.5em;
  color: var(--white);
  overflow: hidden;

  h2 {
    font-size: var(--fontMed);
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
export const Rating = styled.div`
  display: flex;
  justify-content: flex-start;

  h3 + div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }
`;

export const Directors = styled.div`
  margin: 0 0 0 2.5em;

  p {
    margin: 0;
  }
`;
