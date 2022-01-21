import styled from "styled-components";

export const Wrapper = styled.section`
  background: var(--darkGrey);
  padding: 0 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGrey);
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 1.3em;

  span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 0.8em;

    @media (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
