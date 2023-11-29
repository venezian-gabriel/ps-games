'use client';
import React, { createContext, useReducer, useContext } from 'react';

const isLocalStorageAvailable = () => {
  return typeof localStorage !== 'undefined';
};

const initialState = {
  cart: isLocalStorageAvailable()
    ? JSON.parse(localStorage.getItem('cart')) || []
    : [],
};

const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const productInCart = state.cart.find(
        (item) => item.link === action.payload.link
      );

      if (productInCart) {
        return state;
      } else {
        const newCart = [action.payload, ...state.cart];
        localStorage.setItem('cart', JSON.stringify(newCart));
        return { ...state, cart: newCart };
      }

    case actionTypes.REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(
        (item) => item.link !== action.payload
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case actionTypes.CLEAR_CART:
      localStorage.removeItem('cart');
      return { ...state, cart: [] };

    default:
      return state;
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: actionTypes.CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
