import { StarIcon } from "@heroicons/react/24/outline";
import React, { useCallback, useState } from "react";
import ProductDetailCard from "./ProductDetailCard";

const ProductListCard = ({ product = { rating: 0 } }) => {
  const rating = Array.from({ length: 5 }).map((_, index) => (
    <StarIcon
      key={index}
      className={`w-5 h-5 ${
        index < product.rating ? "fill-primary text-primary" : "text-gray-300"
      }`}
    />
  ));

  const [productDetailMode, setProductDetailMode] = useState(false);

  const handleProductDetailMode = useCallback(() => {
    setProductDetailMode(true);
  }, []);

  const handleDisableProductDetailMode = useCallback(() => {
    setProductDetailMode(false);
  }, []);

  return (
    <>
      <ProductDetailCard
        enable={productDetailMode}
        product={product}
        handleDisable={handleDisableProductDetailMode}
      />
      <div
        onClick={handleProductDetailMode}
        className="w-full h-fit overflow-hidden transition-transform transform hover:scale-105 border rounded-lg shadow-md hover:shadow-lg cursor-pointer flex flex-col md:flex-row"
      >
        <div className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-36 rounded-full">
          <img
            src={`/productImages/${product.image}`}
            alt={product.title}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
          <div>
            <div className="text-lg font-semibold mb-2 line-clamp-1">
              {product.title}
            </div>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {product.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">
              ${product.price}
            </span>
            <div className="flex items-center">
              {rating}
              <span className="ml-2 text-sm text-gray-500">
                ({product.rating})
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListCard;
