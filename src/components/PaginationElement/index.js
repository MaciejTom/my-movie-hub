import React from "react";

//Proptypes
import PropTypes from "prop-types";
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

PaginationElement.propTypes = {
  number: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};

export default PaginationElement;
