import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'

const pelicula= [{
  id: 0,
  nombre: "Batman Vs Superman Ultimatte Edition",
  categoria: "Superheros, Accion, aventuras, DC",
  formato: "4k",
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
  formato:"Bluray",
  precio:6300,
  imagen: "https://http2.mlstatic.com/D_NQ_NP_281721-MLA20828472502_072016-O.webp"
},
{
  id: 5,
 nombre: "4k Ultra Hd Blu-ray The Godfather Trilogy / El Padrino",
  categoria:"Accion, Drama, Clasico",
  formato:"4k",
  precio:35000,
  imagen:"https://http2.mlstatic.com/D_NQ_NP_783310-MLA49335243260_032022-O.webp"
},
{
  id: 6,
  nombre: "Lo Que El Viento Se Llevo",
  categoria:"Clasico, Drama, Romance",
  formato:"Bluray",
  precio:4999,
  imagen:"https://http2.mlstatic.com/D_NQ_NP_4081-MLA124606828_7358-O.webp"
},
{
  id: 8,
  nombre: "Aliens 30th Anniversary Edition Blu-ray",
  categoria:"Terror, Aventura",
  formato:" Bluray",
  precio:7490,
  imagen:"https://http2.mlstatic.com/D_NQ_NP_785519-MLA43637616538_092020-O.webp"
},{
  id: 9,
  nombre: "Blu Ray Matrix 4 Film Deja Vu Collection Original Box",
  categoria:"Accion",
  formato:" Bluray",
  precio:9999,
  imagen:"https://http2.mlstatic.com/D_NQ_NP_912878-MLA49715668023_042022-O.webp"
},
{
  id : 10,
  nombre: "Drive",
  categoria:"Drama, Accion",
  formato:" Bluray",
  precio:4000,
  imagen:"https://http2.mlstatic.com/D_NQ_NP_13621-MLA143262351_3714-O.webp"
},
{
  id : 11,
  nombre: "Equilibrium",
  categoria:"Drama, Accion",
  formato: "Bluray",
  precio:8400,
  imagen:"https://http2.mlstatic.com/D_NQ_NP_617046-MLA48975687673_012022-O.webp"
},
{
  id : 12,
  nombre: "Avenger Endgame",
  categoria:"Marvel, Accion",
  formato:" Bluray",
  precio:5600,
  imagen:"https://http2.mlstatic.com/D_NQ_NP_729698-MLA31968950878_082019-O.webp"
}];

export const ItemListContainer = ({imprimirPeliculas}) =>{
   const [data,setData]=useState([]);

  const { formatoId } = useParams();

   useEffect(()=>{
    const getData = new Promise (resolve =>{
      setTimeout(()=> {
      resolve(pelicula);
      }, 2000);
    });
    if(formatoId){
     getData.then(res=>setData(res.filter(pelicula=>pelicula.formato===formatoId)));
    }else{
      getData.then(res=>setData(res))
    }
},[formatoId])

  const onAdd = (param) => {console.log(param)
  }

    return(
        <>
        <div>{imprimirPeliculas}</div>
        <ItemList data ={data}/>
        </>
  )
};


export default ItemListContainer;