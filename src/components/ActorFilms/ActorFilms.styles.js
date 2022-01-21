import styled from "styled-components";

export const Content = styled.section`
  h2 {
    font-size: var(--fontBigger);
  }
  padding: 0 1.3em;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;
export const Film = styled.div`
  padding: 1.3em 0;
  a {
    display: flex;
    text-decoration: none;
    color: var(--white);
    border-radius: 20px;
    background: var(--darkGrey);
    @media (max-width: 750px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ImageDiv = styled.div`
  max-width: 410px;
  align-self: center;

  ${({ img }) => img && "flex: 1;"}
  @media (max-width: 750px) {
    max-width: none;
  }

  img {
    width: 100%;
    border-radius: 20px;
    display: block;
  }
`;
export const Text = styled.div`
  padding: 1.8em;
  flex: 1;
  h3 {
    font-size: var(--fontBig);
    margin: 0 0 1.3em 0;
  }
`;
