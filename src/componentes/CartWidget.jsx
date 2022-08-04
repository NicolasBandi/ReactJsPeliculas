import { Link } from 'react-router-dom';
import React from 'react';
import { useCartContext } from './CartContext';
import cart from '../img/cart.svg';
import '../Style/peliculas.css';


const CartWidget = () => {
  const {productoTotal} = useCartContext();

    return(
      <Link to = '/cart'>
      
      <img className="totalItems"  src={cart} width="35" height="35" alt="cartwidget" />{productoTotal () || ''} 
       
      </Link>
    );
}

export default CartWidget;