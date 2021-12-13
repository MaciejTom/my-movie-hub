import React from "react";

import { List } from "./Pagination.style";

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
            <li key={index}>
              <button
                className={`${number == currentPage && "current"}`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            </li>
          ))
        : pageNumbers.map((number, index) => {
            if (currentPage == 1 || currentPage == 2) {
              if (number == 1 || number == 2 || number == pageNumbers.length) {
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
              }
            } else {
              if (
                number == 1 ||
                number == currentPage ||
                number == pageNumbers.length
              ) {
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
              }
            }
          })}

      <button onClick={() => changePagination("+")}>{">"}</button>
    </List>
  );
};
