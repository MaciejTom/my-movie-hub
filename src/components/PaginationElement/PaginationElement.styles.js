import styled from "styled-components";

export const Wrapper = styled.div`

  .current {
    background: grey;
  }
  .dot:before {
   
    content: '.';
    display: inline-block;
    position: absolute;
    bottom: -0.5em;
    left: 0;
    text-align: center;
    width: 100%;

}
`