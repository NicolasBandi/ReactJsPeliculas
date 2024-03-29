import { addDoc, collection, serverTimestamp} from'firebase/firestore';
import { db } from '../firebase/firebase';
import React from "react";
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import '../Style/ItemCart.css';



const Cart = () => {
    const {cart, precioTotal, clear} = useCartContext();

    const order = {
        buyer: {
            name: "Nicolas Pedicino",
            email: "nicolaspablopedicino@gmail.com",
            phone: "112191564",
        },
        items: cart.map((product) => ({
            id: product.id, 
            nombre: product.nombre,
            precio: product.precio,
            quantity: product.quantity,
        })),
        date: serverTimestamp(),
        total: precioTotal(),
    }

    console.log(order)

    const handleClick = () => {
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => alert("Su codigo de orden es :" +id));
    }

    if (cart.length === 0){
        return(
        <>
           <h3 className="inside">No hay peliculas seleccionadas :C </h3>
           <Link to ='/'><h3 className="inside"> Ir a Catalogo </h3> </Link>
        </>
        );
    }
    return (
      <>

        : {
             cart.map (product =><ItemCart key={product.id} product={product}/>)}

             <aside className="cerrar-compra">
             <h4 className='Precio1'>El precio total de su compra es de ${precioTotal()}</h4> 

             <button onClick={()=> clear (cart)} className="btn btn-danger" id='clean'>Limpiar Carrito Completo </button>
             <button onClick={handleClick}  className="btn btn-success" id='finish'>Finalizar Compra</button>
            </aside>

            </>
    );
}

export default Cart;
