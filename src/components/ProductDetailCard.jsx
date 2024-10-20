import React, { useEffect, useCallback } from "react";
import Layer from "./common/Layer";
import ProductDetailView from "./ProductDetailView";

function ProductDetailCard({ enable, handleDisable, product }) {
  const getClasses = useCallback(() => {
    const baseClasses =
      "fixed top-8 bottom-8 left-4 right-4 border z-10 overflow-y-auto shadow-lg bg-white transition-all duration-500 rounded-xl transform";
    return enable
      ? `${baseClasses} translate-y-0 opacity-100`
      : `${baseClasses} translate-y-full opacity-0`;
  }, [enable]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === "Escape") handleDisable(false);
  }, [handleDisable]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  return (
    <>
      <Layer enable={enable} onMouseDown={handleDisable} />
      <div className={getClasses()} tabIndex={0}>
        <button
          onClick={handleDisable}
          className="flex items-center gap-2 p-2 border absolute right-4 top-4 px-4 rounded bg-gray-50 hover:bg-gray-100"
        >
          <h1 className="font-bold">Esc</h1>
        </button>
        <div className="pt-10 md:pt-20">
          <ProductDetailView product={product}/>
        </div>
      </div>
    </>
  );
}

export default ProductDetailCard;