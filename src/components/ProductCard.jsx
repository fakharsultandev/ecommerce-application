import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full h-full overflow-hidden transition-transform hover:scale-105 border rounded-lg hover:shadow-lg cursor-pointer">
      <div>
        <div className="aspect-square overflow-hidden">
          <img
            src={`/productImages/${product.image}`}
            alt="Product image"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="p-6 max-md:p-3">
        <div className="text-lg font-semibold mb-2 line-clamp-2 max-md:text-sm">
          {product.title}
        </div>
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <span className="md:text-2xl font-bold">${product.price}</span>
          <div className="flex items-center">
            <BsStarFill className="w-5 h-5 max-md:size-4 text-orange-600" />
            <span className="ml-2 text-sm text-muted-foreground">
              ({product.rating})
            </span>
          </div>
        </div>
      </div>
      <div className="p-6 pt-0 max-md:hidden">
        <button className="w-full bg-zinc-900 py-2 rounded-full text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
