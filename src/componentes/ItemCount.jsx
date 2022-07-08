import React, {useState} from "react";
import '../Style/peliculas.css';

const ItemCount= () => {
let peliculaStock = 5;

//let restar = cantidad-1
const [cantidad, setRates] = useState(1); // uno por defecto


const sumar =() =>{
 if (cantidad < peliculaStock){
  setRates(cantidad+1)
 } else{ (cantidad = 5)}
};

const restar =() =>{
  if (cantidad > 1){
  setRates(cantidad-1)}
};
  

  return(
    <div className="card-body">
    <h5 className="card-title">Desafio Coder</h5>
    <h5 className="numberCard">{cantidad}</h5>
    <button onClick={restar} className="btn btn-danger">Restar</button>
    <button onClick={sumar} className="btn btn-success">Sumar</button>
  </div>
  );


};

export default ItemCount;