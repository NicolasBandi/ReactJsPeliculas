import React from "react";
import '../Style/ItemDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export const ItemDetail =({data})=>{
    return(
  <div className="container">
    <div className="detalle">
            <img classname="datail_image" src={data.imagen} alt="Pelicula" />
        <div className="contenido">
            <h1 className="nombre">{data.nombre}</h1>
            <h4 className = "sinopsis">{data.sinopsis}</h4>
            <p className="item-price"> Precio ${data.precio}</p>
            <span className="d-flex justify-content-center"><button  id="botonComprar" type="button" className="btn btn-dark ">Comprar Pelicula </button></span>
        </div>
    </div>
  </div>
    );
}

export default ItemDetail;