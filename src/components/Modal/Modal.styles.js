import styled from "styled-components";

import Modal from "./index";

export const StyledModal = styled(Modal)`
  .modal {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    overflow: hidden;
    z-index: 999;
    transition: opacity 0.4s ease, visibility 0.4s ease,
      transform 0.5s ease-in-out;
  }
  .modal.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
  .modal img {
    width: auto;
    max-height: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    padding: 1.3rem;
    margin: 0 auto;
  }
`;
