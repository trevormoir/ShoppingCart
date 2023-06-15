import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTitle } from "../hooks/useTitle";
import { useFetch } from "../hooks/useFetch";

export const ProductDetail = () => {
  const params = useParams();
  console.log(params.id);
    //use if using json server
    //const [url, setUrl] = useState(`http://localhost:8000/products/${params.id}`);
    //const { data: products, loading, error } = useFetch(url, { contect: 'ABC'});
    
    //useTitle(products.name);
    useEffect(() => {
      document.title = products ? `${products.name} | Shopping Cart` : "Shopping Cart";
    },[products]);

    return (
      <main>
        { error && <p>{error}</p>}
        { loading && <p className="loading">Loading products...</p>}
        { products &&
        <section className="flex justify-around flex-wrap py-5">
          <div className="max-w-sm">
            <img className="rounded" src={products.image} alt={products.name} />
          </div>
          <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
            <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{products.name}</h1>

            <p className="my-4">
              <span className="mr-2 font-bold">Price:</span>
              <span>${products.price}</span>
            </p>
          </div>
        </section>
      }
      </main>
    )
}
