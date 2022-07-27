import React from "react";
import { useCartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import ItemCart from "./ItemCart";


const Cart = () => {
    const {cart, precioTotal, clear} = useCartContext();
   
    if (cart.length === 0){
        return(
        <>
           <h3>No hay peliculas seleccionadas :C </h3>
           <Link to ='/'><h3> Ir a Catalogo </h3> </Link>
        </>
        );
    }

    return (
        <>
        {
             cart.map (product =><ItemCart key={product.id} product={product}/>)}
             <h4>El precio total de su compra es de ${precioTotal()}</h4> 
            
             <button onClick={()=> clear (cart)} className="btn btn-danger" >Limpiar Carrito Completo </button>
        
        </>
    );
}

export default Cart;