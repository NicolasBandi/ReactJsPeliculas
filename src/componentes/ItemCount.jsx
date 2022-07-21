import React, {useState} from "react";

const ItemCount= ({initial, stock, onAdd}) => {

  const[counter, setCounter] = useState(initial)

 const add =() =>{
 if (counter < stock){
 const aux = counter+1
 setCounter(aux)
  }
 };

  const subtract =() =>{
  if (counter > initial){
  const aux = counter-1 
  setCounter(aux)
  }
 };
  
  return(
    <>
    <h5 className="card-title">Agregar Cantidad</h5>
    <h5 className="numberCard">{counter}</h5>
    <button onClick={ subtract } className="btn btn-danger">Restar</button>
    <button onClick={ add } className="btn btn-success">Sumar</button>
    <div><button onClick={ onAdd } className="btn btn-dark">Agregar al Carrito</button></div>
    </>
  )
};

export default ItemCount;