import styled from "styled-components";

export const Wrapper = styled.div`
  /* display: flex;
  align-items: center;
  
  
  padding: 0 20px; */
`;
export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  /* 
 
  height: 100%;
  display: flex;
  align-items: flex-end; */
`;
export const Film = styled.div`
  padding: 20px;
  a {
  }
  /* 
  flex-direction: column; */
  a {
    display: flex;
    text-decoration: none;
    color: var(--white);
    border-radius: 20px;
    background: var(--darkGrey);
    @media (max-width: 750px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Text = styled.div`
  padding: 30px;
`;
export const ImageDiv = styled.div`
    max-width: 440px;
  img {
  
    width: 100%;
    border-radius: 20px;
    display: block;
  }
`;
export const Title = styled.h2`
margin: 0 0 20px 0`;
export const Desc = styled.div``;
export const Score = styled.div`
 display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;`;
