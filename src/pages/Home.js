import { useState } from 'react'
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

import { ProductCard } from "../components/ProductCard"

export const Home = ({cart, setCart, cartItem, setCartItem}) => {
    useTitle("Home");
    //use if using json server
    //const [url, setUrl] = useState("http://localhost:8000/products");
    //const { data: products, loading, error } = useFetch(url, { contect: 'ABC'});

    const products = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
        {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.png"},
        {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/1004.png"},
        {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/1005.png"},
        {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png"}
      ]

  return (
    <main>
        <section className="products">
            {/* <div className="filter"> */}
                {/* <button onClick={() => setCounter(counter + 1)}>{counter}</button> */}
                {/* <button className="all" onClick={() => setUrl("http://localhost:8000/products")}>All</button>
                <button className="onlystock" onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
            </div> */}
            { loading && <p>{error}</p>}
            { error && <p className="loading">Loading products...</p>}
            {products && products.map((product) => (
                <ProductCard product={product}  key={product.id} cart={cart} setCart={setCart} cartItem={cartItem} setCartItem={setCartItem} />
            ))}
        </section>
    </main>
  )
}
