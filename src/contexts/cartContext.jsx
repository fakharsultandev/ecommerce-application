import React, { useState, createContext, useEffect, useReducer } from "react";

// Create the CartContext
const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.cartItems.find((i) => i.id === action.payload.id);
      if (!action.payload || !action.payload.id) {
        console.error("Invalid item provided");
        return state;
      }
      const updatedCartItems = existingItem
        ? state.cartItems.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.cartItems, { ...action.payload, quantity: 1 }];
      const updatedTotalPrice = state.totalPrice + action.payload.price;
      const updatedTotalQuantity = state.totalQuantity + 1;
      return {
        ...state,
        cartItems: updatedCartItems,
        totalPrice: updatedTotalPrice,
        totalQuantity: updatedTotalQuantity,
      };
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [], totalPrice: 0, totalQuantity: 0 });

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, totalPrice: state.totalPrice, totalQuantity: state.totalQuantity, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
