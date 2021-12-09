import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0px;
  button {
    display: block;
    background: var(--darkGrey);

    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 5px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;
    font-size: var(--fontSmall);

    min-width: 45px;
    height: 45px;
    @media (max-width: 500px) {
      min-width: 35px;
      height: 35px;
      margin: 3px;
    }
  }
  .current {
    background: grey;
  }
`;
