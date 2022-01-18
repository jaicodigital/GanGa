import React from "react";
import "./Pagination.css";

export default function Pagination({
  elementsPerPage,
  allProduct,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allProduct?.length / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="containerPagination">
      <ul>
        {pageNumbers &&
          pageNumbers.map((number, index) => {
            return (
              <div className="page" key={index}>
                <li>
                  <a
                    href="#currentPage"
                    className={
                      number === currentPage ? "pageCurrent" : "number"
                    }
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </a>
                </li>
              </div>
            );
          })}
      </ul>
    </nav>
  );
}

// return (
//   <nav className="paginacion">
//     <ul>
//       {pageNumbers &&
//         pageNumbers.map((number) => (
//           <li key={number}>
//             <button className="btn" onClick={() => paginate(number)}>
//               {number}
//             </button>
//           </li>
//         ))}
//     </ul>
//   </nav>
// );
