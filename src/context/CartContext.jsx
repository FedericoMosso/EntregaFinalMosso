import React, { useState, useContext } from 'react';
import { act } from 'react-dom/test-utils';
const CartContext = React.createContext([]);

export const useCartContext = ()=> useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // const addProduct= (item, newQuantity) => {
    //     const newCart = cart.filter(prod => prod.id !== item-id);
    //     newCart.push({ ...item, quantity: newQuantity });
    //     setCart(newCart);
    // }

    const addProduct = (item, quantity) => {
      if (isInCart(item.id)) {
        setCart(cart.map(product => {
          return product.id === item.id ? { ...product, quantity: product-quantity + quantity } : product
          }));
      } else {
        setCart([...cart, { ...item, quantity }]);
      }
    }

    const totalPrice = () => {
      return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }
    
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const cleanCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));


  return (
    <CartContext.Provider value={{
        cleanCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
