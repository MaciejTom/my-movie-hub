import styled from "styled-components";

export const Dots = styled.div`
  position: absolute;
  z-index: 999;
  left: 50%;
  top: 96%;
  column-gap: 0.5rem;
  display: flex;
  transform: translateX(-50%);
`;

export const Dot = styled.span`
  width: 15px;
  height: 15px;
  box-shadow: 0 0 2px #838383;
  background: ${({i, index}) => index == i ? "#5a5a5a " : "var(--darkGrey)" };
  border-radius: 50%;
  cursor: pointer;
`;
