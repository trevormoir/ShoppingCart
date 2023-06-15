import { useEffect, useState } from 'react';

import './App.css';

import { AllRoutes } from './routes/AllRoutes';
import { Header, Footer } from "./components";

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [cartItem, setCartItem] = useState({});

  useEffect(() => { //evaluates only once!
      localStorage.setItem("cart", JSON.stringify(cart))
    },
    [cart]); //runs everytime cart is updated

  return (
    <div className="App">
      <Header cart={cart} />
      <AllRoutes cart={cart} setCart={setCart} cartItem={cartItem} setCartItem={setCartItem} />
      <Footer />
    </div>
  );
}

export default App;
