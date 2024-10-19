import React, { useState, useEffect } from "react";

function ProductFilterSidebar({enable = false, handleFilterSidebar}) {

    const [sidebarClasses, setSidebarClasses] = useState("hidden");

    const getClasses = () => {
        let classes = "w-full max-w-96 fixed top-0 bottom-0 left-0 bg-gray-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 z-10 border-r border-r-gray-300 transition-all duration-500";

        if (enable) return classes += " translate-x-0"
        return classes += " -translate-x-96 opacity-0";
    }

  return (
    <>
      <div className={getClasses()}>
        <button 
            className="absolute right-6 p-2 border px-4 rounded-lg bg-gray-200 cursor text-lg font-bold text-zinc-700 transition-all"
            onClick={() => handleFilterSidebar(false)}
        >
          Esc
        </button>
      </div>
    </>
  );
}

export default ProductFilterSidebar;