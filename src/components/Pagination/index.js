import React from "react";


//Proptypes
import PropTypes from "prop-types";
//Styles
import { List, LeftBtn, RightBtn } from "./Pagination.style";
//Components
import PaginationElement from "../PaginationElement";


export const Pagination = ({
  totalFilms,
  filmsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
    pageNumbers.push(i);
  }

  const changePagination = (type) => {
    if (type === "+" && currentPage !== pageNumbers.length) {
      setCurrentPage((prev) => prev + 1);
    }
    if (type === "-" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
    <List>
      <LeftBtn size="30px" color="#1c1c1c" onClick={() => changePagination("-")} />
      {pageNumbers.length < 5
        ? pageNumbers.map((number, index) => (
            <PaginationElement
              key={index}
              number={number}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          ))
        : pageNumbers.map((number, index) => {
            if (currentPage === 1 || currentPage === 2) {
              if (number === 1 || number === 2 || number === pageNumbers.length) {
                return (
                  <PaginationElement
                    key={index}
                    number={number}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                );
              }
            }
            if (
              currentPage === pageNumbers.length ||
              currentPage === pageNumbers.length - 1
            ) {
              if (
                number === 1 ||
                number === pageNumbers.length - 1 ||
                number === pageNumbers.length
              ) {
                return (
                  <PaginationElement
                    key={index}
                    number={number}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                );
              }
            } else {
              if (
                number === 1 ||
                number === currentPage ||
                number === pageNumbers.length
              ) {
                return (
                  <PaginationElement
                    key={index}
                    number={number}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                );
              }
            }
          })}

      <RightBtn size="30px" color="#1c1c1c" onClick={() => changePagination("+")}/>
      
    </List>
    </>
  );
};

Pagination.propTypes = {
  totalFilms: PropTypes.number,
  filmsPerPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  currentPage: PropTypes.number,
};
