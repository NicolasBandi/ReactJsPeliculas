import React from 'react';
import Item from './Item';


const ItemList =({data=[]}) => {
    return(
        data.map( pelicula =>
             <Item key={pelicula.id}
             info={pelicula}/>
        
           )
        
    );
};
console.log(ItemList)

export default ItemList; 