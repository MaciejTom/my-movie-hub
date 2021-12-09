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
      console.log(`${currentPage}...${pageNumbers.length}`);

      setCurrentPage((prev) => prev + 1);
    }
    if (type == "-" && currentPage > 1) {
      console.log(`${currentPage}`);
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <List>
      <button onClick={() => changePagination("-")}>{"<"}</button>
      {pageNumbers.length < 5
        ? pageNumbers.map((number, index) => (
            <li key={index}>
              <button onClick={() => setCurrentPage(number)}>{number}</button>
            </li>
          ))
        : pageNumbers.map((number, index) => {
            if (
              number == 1 ||
              number == currentPage ||
              number == currentPage + 1 ||
              number == currentPage - 1 ||
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
          })}

      <button onClick={() => changePagination("+")}>{">"}</button>
    </List>
  );
};
