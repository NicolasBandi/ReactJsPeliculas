import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import {getFirestore, collection , getDocs, query, where} from 'firebase/firestore';

export const ItemListContainer = ({imprimirPeliculas}) =>{
   const [data,setData]=useState([]);

   const { formatoId } = useParams();

   useEffect(()=>{
    const querydb=getFirestore();
    const queryCollection=collection(querydb,'products');

    if(formatoId){
      
    const queryFilter =query(queryCollection, 
    where('formato', '==', formatoId))
    getDocs(queryFilter)
    .then(res=>setData(res.docs.map(product =>({id:product.id, ...product.data()}))))

    }else{
      getDocs(queryCollection)
      .then(res=>setData(res.docs.map(product =>({id:product.id, ...product.data()}))))
  
    }
},[formatoId])

    return(
        <>
        <ItemList data ={data}/>
        </>
  )
};


export default ItemListContainer;