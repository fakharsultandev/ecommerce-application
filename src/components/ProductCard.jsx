import React, { useCallback, useState } from "react";
import { BsStarFill } from "react-icons/bs";

import Button from "./common/Button";
import ProductDetailCard from "./ProductDetailCard";
import { useCart } from "../hooks/useCart";

const ProductCard = React.memo(({ product }) => {
  const [productDetailMode, setProductDetailMode] = useState(false);
  const { addItemToCart } = useCart(); // useCart hook

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
      <div className="z-0 w-full h-full overflow-hidden transition-transform duration-300 ease-in-out transform hover:scle-105 border rounded-lg hover:shadow-lg cursor-pointer bg-gray-100">
        <div className="flex flex-col h-full">
          <div className="aspect-square overflow-hidden">
            <img
              src={`/productImages/${product.image}`}
              alt="Product image"
              className="object-contain w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="p-6 max-md:p-3 flex-1">
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
            <div className="pt-4  max-md:hidden mt-auto grid grid-cols-2 md:grid-cols-1 gap-2">
              <Button
                onClick={handleProductDetailMode}
                className="rounded-full px-4 border-zinc-600"
              >
                View Detail
              </Button>{" "}
              <Button
                onClick={() => addItemToCart(product)}
                className="px-6 bg-zinc-900 py-2 rounded-full text-white"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ProductCard;
