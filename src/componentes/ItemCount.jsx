import React, {useState} from "react";

const ItemCount= ({initial, stock, onAdd}) => {

  const[count, setCount] = useState(initial)

 const add =() =>{
 setCount(count + 1)
 };

  const subtract =() =>{
    setCount(count - 1)
  }
 
  
  return(
    <>
    <h5 className="card-title">Agregar Cantidad</h5>
    <h5 className="numberCard">{count}</h5>
    <button disabled={count<=1} onClick={ subtract } className="btn btn-danger">Restar</button>
    <button disabled={count>=stock} onClick={ add } className="btn btn-success">Sumar</button>
    <div><button  disabled={stock<=0} onClick={()=>onAdd(count)} className="btn btn-dark">Agregar al Carrito</button></div>
    </>
  )
};

export default ItemCount;