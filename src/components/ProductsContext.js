import {createContext} from "react";
import useLocalStorageState from 'use-local-storage-state';

export const ProductsContext = createContext({});

// export function ProductsContextProvider({children}) {
//   const [selectedProducts,setSelectedProducts] = useLocalStorageState('cart', {defaultValue:[]});
//   return (
//     <ProductsContext.Provider value={{selectedProducts,setSelectedProducts}}>{children}</ProductsContext.Provider>
//   );
// }

export function ProductsContextProvider({children}) {
  const [selectedProducts,setSelectedProducts] = useLocalStorageState('cart', {defaultValue:[]});

  // Function to clear the cart
  const clearCart = () => {
    setSelectedProducts([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <ProductsContext.Provider value={{selectedProducts, setSelectedProducts, clearCart}}>
      {children}
    </ProductsContext.Provider>
  );
}