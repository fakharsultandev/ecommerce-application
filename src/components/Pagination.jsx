import React from "react";

function Pagination({ totalPages }) {
  return (
    <div className="flex gap-2 my-8 items-center justify-center">
      {totalPages > 1
        ? [1, 2, 3, 4].map((page) => (
            <div key={page} className="border rounded cursor-pointer size-10 flex items-center justify-center">
              {page}
            </div>
          ))
        : ""}
    </div>
  );
}

export default Pagination;
