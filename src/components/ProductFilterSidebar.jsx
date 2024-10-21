import React, {
  useMemo,
  useEffect,
  useRef,
  useCallback,
  useState,
} from "react";
import PropTypes from "prop-types";
import Button from "./common/Button";
import { ArrowPathIcon, CheckIcon } from "@heroicons/react/24/outline";

function ProductFilterSidebar({
  filters,
  onFilter,
  enable = false,
  handleSidebarClose,
}) {
  const sidebarRef = useRef(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const getClasses = useCallback(() => {
    return `w-full max-w-96 fixed top-0 bottom-0 left-0 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-4 z-10 border-r border-r-gray-300 transition-all duration-500 ${
      enable ? "translate-x-0" : "-translate-x-96"
    }`;
  }, [enable]);

  const memoizedClasses = useMemo(() => getClasses(), [getClasses]);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleSidebarClose();
      }
    };

    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleSidebarClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleSidebarClose, sidebarRef]);

  const handleFilter = useCallback(() => {
    onFilter(selectedFilters);
  }, [selectedFilters]);

  const handleResetFilter = useCallback(() => {
    setSelectedFilters([]);
    onFilter(selectedFilters);
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFilters((prevFilters) =>
      checked
        ? [...prevFilters, name]
        : prevFilters.filter((filter) => filter !== name)
    );
  };

  return (
    <div className={memoizedClasses} ref={sidebarRef}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filter Products</h2>
        <Button
          className="rounded-full text-sm font-bold text-zinc-700"
          onClick={handleSidebarClose}
        >
          Esc
        </Button>
      </div>
      <div className="mb-4 ">
        <h3 className="font-semibold mb-2">Category</h3>
        {filters.map((filter) => (
          <div key={filter.id}>
            <input
              className="cursor-pointer border-gray-300 accent-zinc-800 size-4 checked:border-red-500"
              type="checkbox"
              id={filter.value}
              name={filter.value}
              checked={selectedFilters.includes(filter.value)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={filter.value} className="ml-2 cursor-pointer">
              {filter.name}
            </label>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4 gap-2">
        <Button
          className="bg-zinc-800 text-gray-100 rounded-full px-2.5"
          onClick={handleFilter}
        >
          <CheckIcon className="size-5" />
        </Button>
        <Button
          className="bg-gray-50 text-zinc-700 hover:bg-gray-100 rounded-full px-4"
          onClick={handleResetFilter}
        >
          <ArrowPathIcon className="size-5" />
          Reset
        </Button>
      </div>
    </div>
  );
}

ProductFilterSidebar.propTypes = {
  enable: PropTypes.bool,
  handleFilterSidebar: PropTypes.func,
};

export default ProductFilterSidebar;
