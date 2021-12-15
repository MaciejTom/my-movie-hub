import React from "react";

//Styles
import { Wrapper } from "./PaginationElement.styles";

const PaginationElement = ({ number, currentPage, setCurrentPage }) => {
  return (
    <Wrapper>
      <button
        className={`${number == currentPage && "current"}`}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </button>
    </Wrapper>
  );
};

export default PaginationElement;
