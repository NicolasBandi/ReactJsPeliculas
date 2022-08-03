import React from 'react';
import Item from './Item';
import '../Style/ItemDetail.css';


const ItemList =({data=[]}) => {
    return(
      <div className='itemListCard'>
          { data.map ( pelicula => {
            return <Item key={pelicula.id} info={pelicula}/>
             }
        )   
    }
     </div>
  );
};

export default ItemList; 