import React from "react";
import ProductCard from "./ProductCard";
import ProductListCard from "./ProductListItem";

function ProductGrid({products, viewType}) {

  const getProductViewClasses = () => {
    let classes =
      "grid gap-10 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-md:gap-4 ";

    if (viewType === "list")
      return (classes = "grid grid-cols-1 max-w-screen-lg gap-5 m-auto");
    return (classes += "grid-cols-4");
  };

  return (
    <div className={getProductViewClasses()}>
      {products.map((p) =>
        viewType === "list" ? (
          <ProductListCard product={p} key={p.id} />
        ) : (
          <ProductCard product={p} key={p.id} />
        )
      )}
    </div>
  );
}

export default ProductGrid;
