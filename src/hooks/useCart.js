import { useContext, useMemo } from "react";
import { CartContext } from "../contexts/cartContext";

/**
 * Custom hook to access the product context data.
 * @returns {Object} The product context data.
 * @throws Will throw an error if ProductContext is null or undefined.
 */
export function useCart() {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("CartContext is null or undefined");
  }

  return useMemo(() => cart, []);
}
