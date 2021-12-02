import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background: var(--medGrey);
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  span {
   font-size: var(--fontSmall);
   color: var(--white);
   padding-right: 10px;

   @media (min-width: 768px) {
     font-size: var(--fontMed);
   }
  }

 
`;
