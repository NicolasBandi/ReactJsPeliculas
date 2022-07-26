import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/peliculas.css';
import { Link } from 'react-router-dom';

const Item = ({info}) => {

    return (
       
        <div className = "card itemCard" >
            <Link to={`/detalle/${info.id}`}> <img className = "card-img-top img-card" src = {info.imagen} alt="peliculas"/></Link>
            <div className = "card-body body-card">
                <h4 className = "card-text item-titulo">{info.nombre}</h4>
                <h6 className = "card-subtitle mb-2 text-muted item-price">${info.precio}</h6>
                <button  type="button" className="btn btn-dark">Comprar Pelicula </button>
            </div>
      </div>
      
)};

export default Item;