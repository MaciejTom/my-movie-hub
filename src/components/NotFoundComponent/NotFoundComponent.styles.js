import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 5em;
  h1 {
    font-size: var(--fontBigger);
    color: var(--medGrey);

    @media (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
