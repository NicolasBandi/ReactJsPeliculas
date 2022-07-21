import React, {useState} from "react";
import '../Style/ItemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";



export const ItemDetail =({data})=>{
  const [alCarrito, setAlCarrito] =useState(false)

  const onAdd = () => {
     setAlCarrito(true)}

    return(
  <div className="container">
    <div className="detalle">
            <img classname="datail_image" src={data.imagen} alt="Pelicula" />
        <div className="contenido">
            <h1 className="nombre">{data.nombre}</h1>
            <h4 className = "sinopsis">{data.sinopsis}</h4>
            <p className="item-price"> Precio ${data.precio}</p>
            {
              alCarrito
               ? <Link to ='/cart' type="button" className="btn btn-dark ">Finalizar Compra</Link>
               : <ItemCount initial={1} stock={6} onAdd={onAdd}/>
            }
        
        </div>
     </div>
   </div>
    );
};


export default ItemDetail;