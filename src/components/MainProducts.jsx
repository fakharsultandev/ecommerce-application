import React, { useState } from "react";
import ProductHandlersHeader from "./ProductFilterHeader";
import ProductListCard from "./ProductListItem";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import PageTitleSection from "./common/PageTitleSection";

function MainProducts({ products }) {
  const [viewType, setViewType] = useState("grid");

  const getProductViewClasses = () => {
    let classes =
      "grid gap-10 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-4 ";

    if (viewType === "list")
      return (classes = "grid grid-cols-1 max-w-screen-lg gap-5 m-auto");
    return (classes += "grid-cols-4");
  };

  return (
    <div className="p-4 max-w-screen-2xl m-auto ">
      <PageTitleSection
        title="New Arrivals"
        slogan=" Shop through our latest selection of Fashion"
      />
      <ProductHandlersHeader handleViewType={setViewType} />
      <div className={getProductViewClasses()}>
        {products.map((p) =>
          viewType === "list" ? (
            <ProductListCard product={p} key={p.id} />
          ) : (
            <ProductCard product={p} key={p.id} />
          )
        )}
      </div>
      <Pagination totalPages={4} />
    </div>
  );
}

export default MainProducts;
