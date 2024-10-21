import _ from "lodash";
import React from "react";

function Pagination({ itemsPerPage, onPaginate, totalItems, currentPage }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = _.range(1, totalPages + 1, 1);
  console.log(pages);

  return (
    <div className="flex gap-2 my-20 items-center justify-center ">
      {pages.map((page) => (
        <div
          key={page}
          onClick={() => onPaginate(page)}
          className={`border cursor-pointer size-10 flex items-center justify-center rounded-full ${page  === currentPage ? "bg-zinc-800 text-white" : ""}`}
        >
          {page}
        </div>
      ))}
    </div>
  );
}

export default Pagination;
