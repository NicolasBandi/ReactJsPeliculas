import React from 'react';
import '../Style/ItemCart.css';
import { useCartContext } from './CartContext';


const ItemCart = ({ product}) =>{
    const {removeItem} =useCartContext();

 return (
    <div className="superContainer">
    <div className="itemCart">
        <img src={product.imagen} alt={product.nombre}/>
     </div>
      <div className="carro">
          <h4 className="inside">{product.nombre}</h4>
          <h6 className="inside">Cantidad de Articulos = {product.quantity}</h6>
          <h6 className="inside">Precio = ${product.precio}</h6>
          <h6 className="inside">Subtotal = ${product.quantity*product.precio}</h6>
          <button  onClick={()=> removeItem(product.id)} className="btn btn-danger inside">Eliminar Articulo</button> 
       </div>
   </div>

)
}

export default ItemCart;