import { useContext, useMemo } from "react";
import { ProductContext } from "../contexts/productsContext";

/**
 * Custom hook to access the product context data.
 * @returns {Object} The product context data.
 * @throws Will throw an error if ProductContext is null or undefined.
 */
export function useProductContext() {
  const productContext = useContext(ProductContext);

  if (!productContext) {
    throw new Error("ProductContext is null or undefined");
  }

  return useMemo(() => productContext, []);
}
