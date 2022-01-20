import styled from "styled-components/macro";

export const Wrapper = styled.section`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 1.3rem;
  h2 {
    font-size: var(--fontBigger);
    color: var(--medGrey);

    @media (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
