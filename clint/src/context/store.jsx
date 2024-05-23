import { createContext } from "react";
import { food_list } from "../assets/assets";

export const Store = createContext(null);

export const ContextProvider = (props) => {
  const contextValue = {
    food_list,
  };

  return <Store.Provider value={contextValue}>{props.children}</Store.Provider>;
};
