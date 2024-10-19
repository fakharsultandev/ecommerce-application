import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";

const ProductListCard = ({ product }) => {
  const rating = Array(5)
    .fill(null)
    .map((_, index) => (
      <StarIcon
        key={index}
        className={`w-5 h-5 ${
          index < product.rating ? "fill-primary text-primary" : "text-primary"
        }`}
      />
    ));

  return (
    <div className="w-full h-fit overflow-hidden transition-all border rounded-lg hover:shadow-lg cursor-pointer flex">
      <div className="aspect-square overflow-hidden">
        <img
          src={`/productImages/${product.image}`}
          alt="Product image"
          className="object-cover size-52 p-2 "
        />
      </div>
      <div className="p-6">
        <div className="text-lg font-semibold mb-2 line-clamp-1">
          {product.title}
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-10 mb-4 flex-wrap">
          <span className="md:text-2xl font-bold">${product.price}</span>
          <div className="flex items-center  max-md:hidden">
            {rating}
            <span className="ml-2 text-sm text-muted-foreground">
              ({product.rating})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;
