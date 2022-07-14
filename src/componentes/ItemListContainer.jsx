import ItemCount from './ItemCount';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect,useState} from 'react';

const pelicula= [{
  id: 0,
  nombre: "Batman Vs Superman Ultimatte Edition",
  categoria: "Superheros, Accion, aventuras, DC",
  formato: "Bluray 4k",
  precio: 9500,
  imagen: "https://m.media-amazon.com/images/I/91+EM8-G8ZL._SL1500_.jpg"
},
{
  id: 1,
  nombre: "Jumanji",
  categoria:"Aventuras",
  formato: "DvD",
  precio: 700,
  imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT459RuKN6rJFsw1rkxkeFg8R-VTDqab1SRIA&usqp=CAU"
},
{
  id: 2,
  nombre: "Mr. Nobody",
  categoria:"Drama",
  formato:"Bluray",
  precio:6500,
  imagen:"https://http2.mlstatic.com/D_NQ_NP_13295-MLA20074435103_042014-O.webp"
},
{
 id: 3,
 nombre: "Paprika",
 categoria:"Anime",
 formato:"DvD",
 precio: 3600,
 imagen:"https://cdn.hmv.com/r/w-640/hmv/files/ef/ef344116-25ff-4e9a-8858-80b8c91e3d5f.jpg"
},
{
  id: 4,
  nombre: "Batman Vs Superman Ultimatte Edition 3D",
  categoria:"Superheroes, Accion, Aventuras, DCX",
  formato:"Blu-ray 3d",
  precio:6300,
  imagen: "https://http2.mlstatic.com/D_NQ_NP_281721-MLA20828472502_072016-O.webp"
},
{
  id: 5,
 nombre: "4k Ultra Hd Blu-ray The Godfather Trilogy / El Padrino",
  categoria:"Accion, Drama, Clasico",
  formato:"4k Ultrahd, Blu-ray",
  precio:35000,
  imagen:"https://http2.mlstatic.com/D_NQ_NP_783310-MLA49335243260_032022-O.webp"
}];

export const ItemListContainer = ({imprimirPeliculas}) =>{
   const [data,setData]=useState([]);
   console.log(data)

   useEffect(()=>{
    const getData = new Promise (resolve =>{
      setTimeout(()=> {
      resolve(pelicula);
      }, 3000);
    });
     getData.then(res=>setData(res));
},[])

  const onAdd = (param) => {console.log(param)
  }

    return(
        <>
        <div>{imprimirPeliculas}</div>
        <ItemCount initial={1} stock={6} onAdd={onAdd}/>
        <ItemList data ={data}/>
        </>
  )
};


export default ItemListContainer;