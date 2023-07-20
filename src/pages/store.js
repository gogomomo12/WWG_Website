import { useEffect, useState } from "react";
import Product from "../components/Product";
import { initMongoose } from "../lib/mongoose";
import { findAllProducts } from "./api/products";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { Navbar } from '../components';
import { navlinks } from '../data/wwgdata';

export default function Home({ products }) {
  const [phrase, setPhrase] = useState('');

  const categoriesNames = [...new Set(products.map(p => p.category))];

  if (phrase) {
    products = products.filter(p => p.name.toLowerCase().includes(phrase));
  }

  return (
    <Layout>
      {/* <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search for products..." className="bg-gray-200 w-full py-2 px-4 rounded-xl mx-auto"/> */}
      <Navbar navlinks={navlinks} />
      <div className="flex flex-row md:flex-col justify-center items-center items-start space-y-0 md:space-y-4 md:space-x-0">
        {categoriesNames.map(categoryName => (
          <div key={categoryName} className="w-full md:w-auto p-4 mx-auto font-extrabold">
            {products.find(p => p.category === categoryName) && (
              <div className="text-center bg-gray-100 shadow-lg rounded-lg p-5 transition-transform transform hover:scale-105">

                <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
                <div className="flex flex-col items-center">
                  {products.filter(p => p.category === categoryName).map(productInfo => (
                    <div key={productInfo._id} className="my-2">
                      <Product {...productInfo} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}




// const categoriesNames = [...new Set(products.map(p => p.category))];