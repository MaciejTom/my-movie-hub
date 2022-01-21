import styled from "styled-components";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: center;
  padding: 0;
  column-gap: 0.3em;

  button {
    display: block;
    background: var(--darkGrey);
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    
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
     
    }
  }
  }
`;
export const RightBtn = styled(BsFillArrowRightCircleFill)``

export const LeftBtn = styled(BsFillArrowLeftCircleFill)``