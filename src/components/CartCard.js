import "./CartCard.css";
import { Link } from 'react-router-dom';

export const CartCard = ({product, cart, setCart}) => {
  const {id, name, price, image, qty} = product;

  const handleRemove = (id) => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== id);
    setCart(updatedCart);
  }

  const handleQty = (id) => {
    if (parseInt(document.getElementById("selected-"+id).value) === 0) {
      handleRemove(id);
    }
    else {
      const updatedCart = cart.map((todo) => (
        todo.id === id ? {id: id, name: name, price: price, image: image, qty: parseInt(document.getElementById("selected-"+id).value)} : todo
      ));
      setCart(updatedCart);
    }
  }

  return (
      <div className="cartCard">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} />
        </Link>
        <Link to={`/product/${id}`}>
        <p className="productName">{name}</p>
        </Link>
        <p className="productPrice">
          <select id={`selected-${id}`} defaultValue={qty} onChange={() => handleQty(id)}>
            {[...Array((qty+1))].map((x, i) =>
              <option value={i} key={i}>{i}</option>
            )}
          </select> x ${price}</p>
        <p className="productPrice">${(price*qty).toFixed(2)}</p>
        <button onClick={() => {handleRemove(id)}}>Remove</button>
      </div>
  )
}
