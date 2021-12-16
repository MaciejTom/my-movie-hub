import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  :hover {
    opacity: 0.8;
  }
  ${({ size }) =>
    size == "small"
      ? `font-size: var(--fontSmall);
      width: 45px;
      min-width: 130px;
      height: 45px;`
      : `font-size: var(--fontMed);
      width: 15%;
      min-width: 150px;
      height: 60px;
     `}
`;
