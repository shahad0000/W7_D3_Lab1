import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const getProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      };
      getProducts();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 bg-gray-50 gap-7 p-5 lg:max-w-[70%]">
          {products.map((product) => (
            <div key={product.id}>
              <div className="border-2 border-gray-100 lg:min-h-[70vh]">
                <div className="w-full">
                  <img
                    className="w-full aspect-square"
                    src={product.image}
                    alt=""
                  />
                  <div className="p-4 flex flex-col gap-4">
                    <div className="font-bold">{product.title}</div>
                    <div>{product.description}</div>
                    <div className="text-2xl text-green-600">SAR {product.price}</div>
                    <div className="flex gap-5">
                      <div>{product.rating.rate}</div>
                      <div>{product.rating.count}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
