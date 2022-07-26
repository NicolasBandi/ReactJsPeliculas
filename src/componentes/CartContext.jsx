import React, { useState, createContext  } from 'react';

export const CartContext = createContext();


const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([]);

    const addToCart= (data) => {
      setCartList([...cartList,data])

   }

   const clean = () => setCartList([]);
      
   const isInCart = (id) =>cartList.find(data => data.id === id) ? true:false;

   const removePelicula =(id) => setCartList(cartList.filter(data=>data.id!==id))
 return (
   <CartContext.Provider value={{
      cartList , 
      addToCart,
      clean,
      removePelicula,
      isInCart
      }}> 
   {children} 
    </CartContext.Provider>
 )
}

export default CartContextProvider;



// agregar ítem al carrito

  /* const addToCart = (item, newQuantity) => {
   const {quantity = 0} =cart.find(pelicula=>pelicula.id === item.id) || {};
   const newCart = cart.filter(pelicula=> pelicula.id !== item.id);
   setCart([...newCart, {...item, quantity: quantity + newQuantity }]) 
   }


   const clear = () => setCart([]);
      
   const isInCart = (id) =>cart.find(pelicula => pelicula.id === id) ? true:false;

   const removePeli =(id) => setCart(cart.filter(pelicula=>pelicula.id!==id))

*/