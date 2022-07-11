import React from 'react';
import ItemCount from './/ItemCount';


export const ItemListContainer = ({imprimirPeliculas}) =>{
    const onAdd = (param) => {console.log(param)}
      return(
        <>
        <div>{imprimirPeliculas}</div>
        <ItemCount initial={1} stock={6} onAdd={onAdd}/>
        </>
  )
};

export default ItemListContainer;