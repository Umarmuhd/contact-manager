import React from "react";
import "./Pagination.css";

function Pagination({ contactsPerPage, totalContacts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => {
          return (
            <li key={pageNumber} className="page-item">
              <a
                href="!#"
                onClick={() => paginate(pageNumber)}
                className="page-link"
              >
                {pageNumber}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
