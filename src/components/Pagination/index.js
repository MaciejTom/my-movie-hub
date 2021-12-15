import React, { useState } from "react";

//Styles
import { List } from "./Pagination.style";

//Components
import PaginationElement from "../PaginationElement";

export const Pagination = ({
  totalFilms,
  filmsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const paginationElement = (number, index) => {
    return (
      <li key={index}>
        <button
          className={`${number == currentPage && "current"}`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      </li>
    );
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
    pageNumbers.push(i);
  }

  const changePagination = (type) => {
    if (type == "+" && currentPage !== pageNumbers.length) {
      setCurrentPage((prev) => prev + 1);
    }
    if (type == "-" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <List>
      <button onClick={() => changePagination("-")}>{"<"}</button>
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
            if (currentPage == 1 || currentPage == 2) {
              if (number == 1 || number == 2 || number == pageNumbers.length) {
                return  <PaginationElement
                key={index}
                number={number}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />;
              }
            }
            if (
              currentPage == pageNumbers.length ||
              currentPage == pageNumbers.length - 1
            ) {
              if (
                number == 1 ||
                number == pageNumbers.length - 1 ||
                number == pageNumbers.length
              ) {
                return  <PaginationElement
                key={index}
                number={number}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />;
              }
            } else {
              if (
                number == 1 ||
                number == currentPage ||
                number == pageNumbers.length
              ) {
                return  <PaginationElement
                key={index}
                number={number}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />;
              }
            }
          })}

      <button onClick={() => changePagination("+")}>{">"}</button>
    </List>
  );
};
