import Header from "./Header";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "./ProductsContext";
import  Herotwo from '../components/Herotwo';
import  {herotwo} from '../data/wwgdata';

export default function Layout({children}) {
  const {setSelectedProducts} = useContext(ProductsContext);
  const [success,setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.href.includes('success')) {
      setSelectedProducts([]);
      setSuccess(true);
    }
  }, []);
  return (
    <div>
      <Herotwo herotwo={ herotwo } />
      <div className="p-5">
        {success && (
          <div className="mb-5 bg-green-400 text-white text-lg p-5 rounded-xl">
            Thanks for your order!
          </div>
        )}
        {children}
      </div>
      <Header />
    </div>
  );
}