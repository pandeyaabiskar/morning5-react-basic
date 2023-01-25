import { createContext } from "react";
import { useFetch } from "../hooks";

export const ProductContext = createContext({});

const ProductProvider = ({ children }) => {
  const { productData, isLoading, isError } = useFetch(
    process.env.REACT_APP_BASE_URL
  );

  return (
    <ProductContext.Provider value={{ productData, isLoading, isError }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
