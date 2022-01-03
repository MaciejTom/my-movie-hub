import styled from "styled-components";

export const Section = styled.section`
  height: 600px;
  overflow: hidden;
  position: relative;
`;
export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(31, 18, 9, 0) 39%,
      rgba(31, 18, 9, 0) 41%,
      rgba(31, 18, 9, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGrey);
  background-size: 100%, cover;
  background-position-y: 30%;
  background-position-x: center;
  height: 600px;
  animation: animateHeroImage 1s;
  transform: ${({ position }) => position};
  opacity: ${({ opacity }) => opacity};
  width: 100%;
  transition: 1s ease;
  position: absolute;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button {
    box-shadow: 0 0 2px #838383;
  }

  h1 {
    font-size: var(--fontBig);

    @media (min-width: 720px) {
      font-size: var(--fontSuperBig);
    }
  }

  p {
    font-size: var(--fontSmall);

    @media (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }
`;
