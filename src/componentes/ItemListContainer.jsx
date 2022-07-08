import React from 'react';
import ItemCount from './/ItemCount';

const ItemListContainer = ({imprimirPeliculas}) =>{
      return(
        <div>
        <h1>{imprimirPeliculas}</h1>
        <ItemCount/></div>
        

);
}

export default ItemListContainer;