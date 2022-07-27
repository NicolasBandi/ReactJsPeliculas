import { Link } from 'react-router-dom';
import React from 'react';
import { useCartContext } from './CartContext';


const CartWidget = () => {
  const {productoTotal} = useCartContext();

    return(
      <Link to = '/cart'>
      <button type="button"  className="btn btn-dark btn btn-outline-success my-2 my-sm-0 " >
        🛒 <span className="badge badge-primary">{productoTotal () || ''}</span > 
       
      </button></Link>
    );
}

export default CartWidget;