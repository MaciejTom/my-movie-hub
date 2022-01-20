import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: var(--darkGrey);
  padding: 0 1.3rem;
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--medGrey);
  border-radius: 20px;
  margin: 0 1.3rem;
  flex: 1;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin: 1.3rem 0;
  }
`;
