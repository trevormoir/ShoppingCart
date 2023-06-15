import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = ({cart, setCart}) => {
  useTitle("Cart");
  
  // const products = [
  //   {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png",}, 
  //   {id: 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png",}, 
  // ]

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cart.length} {cart.length > 0 ? `/ $${cart.map(item => parseInt(item.price) * parseInt(item.qty)).reduce((prev, next) => prev + next)}` : ""}</h1>
        { cart.map((product) => (
          <CartCard key={product.id} product={product} cart={cart} setCart={setCart} />
        )) }        
      </section>
    </main>
  )
}
