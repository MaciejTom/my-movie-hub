import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 1.3em;
`;
export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  height: 55px;
  width: 100%;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 0.5em 0;
    padding: 0 0 0 3.75em;
    border: 0;
    width: 95%;
    background: transparent;
    color: var(--white);
    :focus {
      outline: none;
    }
  }
`;
