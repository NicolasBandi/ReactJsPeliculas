import React, {useState} from "react";
import '../Style/ItemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";


export const ItemDetail =({data})=>{
  const [alCarrito, setAlCarrito] =useState(false);

  const {addToCart}= useCartContext();

  const onAdd = (quantity) => {
     setAlCarrito(true)
      addToCart(data, quantity);}


    return(
  <div className="container">
    <div className="img-div">
            <img classname="datail_image" src={data.imagen} alt="Pelicula" />
    </div>
        <div className="contenido">
            <h1 className="nombre">{data.nombre}</h1>
            <h4 className = "sinopsis">{data.sinopsis}</h4>
            <p className="item-price"> Precio $ {data.precio}</p>
            {
              alCarrito
               ? <Link to ='/cart' type="button" className="btn btn-dark ">Finalizar Compra</Link>
               : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            }

        </div>
     </div>
    );
};


export default ItemDetail;
