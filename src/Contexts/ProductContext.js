import { useState, createContext } from "react";

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  //state

  //Context data

  const productContextData = {};

  //return Provider
  return (
    <productContext.Provider value={productContextData}>
      {children}
    </productContext.Provider>
  );
};
export default ProductContextProvider;
