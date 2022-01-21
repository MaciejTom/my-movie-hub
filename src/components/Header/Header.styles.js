import styled from "styled-components";

export const Wrapper = styled.header`
  background: var(--darkGrey);
  padding: 0 1.3em;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 1.3em 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 100px;

  @media (max-width: 500px) {
    width: 70px;
  }
`;

export const TMDBLogoImg = styled.img`
 width:  140px;

@media (max-width: 500px) {
  width: 90px;
}`;
