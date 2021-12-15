import styled from "styled-components";

export const Content = styled.div`
  h2 {
    font-size: var(--fontBigger);
  }
  padding: 0 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;
export const Film = styled.div`
  padding: 20px;
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
  max-width: 440px;
  img {
    width: 100%;
    border-radius: 20px;
    display: block;
  }
`;
export const Text = styled.div`
  padding: 30px;
  h3 {
    font-size: var(--fontBig);
    margin: 0 0 20px 0;
  }
`;
