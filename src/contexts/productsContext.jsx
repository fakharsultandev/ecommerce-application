import React, { useState, createContext, useEffect } from "react";
import { getProducts } from "../services/fakeProducts";

// Create the ProductContext
const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [viewType, setViewType] = useState("grid");
  const [viewFilter, setFilterView] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortOption, setSortOption] = useState("featured");

  const toggleFilter = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const value = {
    products,
    viewType,
    setViewType,
    viewFilter,
    setFilterView,
    selectedFilters,
    toggleFilter,
    sortOption,
    setSortOption,
  };

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export { ProductProvider, ProductContext };