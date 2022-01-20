import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";

export const Wrapper = styled.section`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "white"};
  background-size: cover;
  background-position: center;
  padding: 2.5rem 1.3rem;
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
  background: var(--darkGrey);
  border-radius: 20px;
   img {
    margin: 0 auto;
   }

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 1.3rem 2.5rem;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
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

  .director {
    margin: 0 0 0 2.5rem;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1rem;
    cursor: pointer;
    padding-left: 0.25rem;
    color: #49a6e9;
  }
`;
