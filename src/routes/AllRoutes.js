import { Routes, Route } from 'react-router-dom';

import { Home, ProductDetail, Cart, PageNotFound } from "../pages";

export const AllRoutes = ({cart, setCart, cartItem, setCartItem}) => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route path="/" element={<Home title="Home" cart={cart} setCart={setCart} cartItem={cartItem} setCartItem={setCartItem} />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}></Route>
        <Route path="*" element={<PageNotFound />} ></Route>
      </Routes>
    </div>
  )
}
