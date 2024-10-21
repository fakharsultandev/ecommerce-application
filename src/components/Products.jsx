import _ from "lodash";
import React, { useEffect, useState, useMemo } from "react";

import paginate from "./utils/paginate";
import Pagination from "./Pagination";
import ProductGrid from "./ProductGrid";
import ProductHeader from "./ProductHeader";
import ProductFilterSidebar from "./ProductFilterSidebar";
import { getProducts } from "../services/fakeProducts";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { PiSquaresFourLight } from "react-icons/pi";

const sortOptions = [
  { id: "01", label: "Price : Low to High", value: "price" },
  { id: "02", label: "Price : High to Low", value: "-price" },
  { id: "03", label: "Rating : High to Low", value: "-rating" },
  { id: "04", label: "Rating : Low to High", value: "rating" },
];

const filters = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Accessories", value: "accessories" },
  { id: 3, name: "Clothing", value: "clothing" },
  { id: 4, name: "Electronics", value: "electronics" },
  { id: 5, name: "Home & Decoration", value: "home-decor" },
  { id: 6, name: "Furniture", value: "furniture" },
];

const listViewTypes = [
  {
    id: "01",
    value: "list",
    icon: () => <ListBulletIcon className="w-6 h-6" />,
  },
  {
    id: "02",
    value: "grid",
    icon: () => <PiSquaresFourLight className="w-6 h-6" />,
  },
];

function Products() {
  const [products, setProducts] = useState([]);
  const [viewType, setViewType] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewFilter, setFilterView] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.error(`Error fetching products: ${error}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSort = (sortOption) => {
    setProducts((prevProducts) => {
      const sortedData = _.orderBy(
        prevProducts,
        [sortOption.split("-").join("")],
        [sortOption.startsWith("-") ? "desc" : "asc"]
      );
      return sortedData;
    });
  };

  const handlePagePaginate = (page) => {
    setCurrentPage(page);
  };

  const handleProductFilters = (filters) => {
    const existedProducts = [...products];
    const filteredProducts = existedProducts.filter((product) => {
      return filters.some((filter) => product.category === filter);
    });

    setSelectedFilters(filteredProducts);
  };

  const filteredProducts = selectedFilters.length ? selectedFilters : products;
  

  const itemsPerPage = 8;
  const totalProducts = filteredProducts.length;
  const paginatedProducts = useMemo(() => paginate(filteredProducts, itemsPerPage, currentPage), [filteredProducts, itemsPerPage, currentPage]);

  return (
    <div className="p-4 max-w-screen-2xl m-auto">
      <ProductHeader
        onSort={handleSort}
        currentViewType={viewType}
        sortOptions={sortOptions}
        handleViewType={setViewType}
        listViewTypes={listViewTypes}
        handleFilterSidebar={setFilterView}
      />
      <ProductFilterSidebar
        filters={filters}
        enable={viewFilter}
        onFilter={handleProductFilters}
        handleSidebarClose={() => setFilterView(false)}
      />
      <ProductGrid products={paginatedProducts} viewType={viewType} />
      <Pagination
        onPaginate={handlePagePaginate}
        itemsPerPage={itemsPerPage}
        totalItems={totalProducts}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Products;
