import React, {useState} from 'react';
import '../Style/ItemDetail.css'

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
    <div className="topus4">
    <button disabled={count>=stock} onClick={ add } className="btn btn-success">Sumar</button>
    <button disabled={count<=1} onClick={ subtract } className="btn btn-danger">Restar</button>
    <div><button  disabled={stock<=0} onClick={()=>onAdd(count)} className="btn btn-dark">Agregar al Carrito</button></div>
    </div>
    </>
  )
};

export default ItemCount;