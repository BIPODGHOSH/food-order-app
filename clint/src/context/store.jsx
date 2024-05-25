import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Store = createContext(null);

export const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [itemsCount, setItemsCount] = useState(0);
  const addToCart = (itemId) => {
    setItemsCount((prev) => prev + 1);
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setItemsCount((prev) => prev - 1);
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    itemsCount,
    addToCart,
    removeFromCart,
  };

  return <Store.Provider value={contextValue}>{props.children}</Store.Provider>;
};
