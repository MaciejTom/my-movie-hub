import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--darkGrey);
  border-radius: 20px;
  padding: 3px;
  text-align: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  h3 {
    margin: 0.6rem 0 0 0;
  }
  p {
    margin: 0.3rem 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;
