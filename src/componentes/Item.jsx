import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/peliculas.css';

const Item = ({info}) => {

    return (
        <div className = "card itemCard" >
            <img className = "card-img-top img-card" src = {info.imagen} alt="peliculas"/>
            <div className = "card-body body-card">
                <h4 className = "card-text item-titulo">{info.nombre}</h4>
                <h6 className = "card-subtitle mb-2 text-muted item-price">${info.precio}</h6>
                <button id="botonComprar" type="button" className="btn btn-dark">Comprar Pelicula </button>
            </div>
      </div>
)};

export default Item;