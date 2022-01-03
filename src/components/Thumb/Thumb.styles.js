import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  display: block;
  max-width: ${({ actor }) => (actor ? `450px` : `720px`)};
  transition: all 0.3s;
  object-fit: cover;
  border-radius: ${({ films }) => (films ? `20px` : `10px`)};
  animation: animateThumb 0.5s;
  

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
