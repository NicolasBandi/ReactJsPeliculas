import React  from 'react';
import '../Style/peliculas.css';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom'

function Navbar () {
 return(

<nav className="div-container">
  <NavLink className="NavLink" to='/' >CinemaComics</NavLink>
  <div >
    <ul  className='list-container' >
    <li  > 
    <NavLink to='/formato/4k'> 4k </NavLink>
      </li>
      <li >
      <NavLink to='/formato/Bluray'> Bluray </NavLink>
      </li>
      <li >
      <NavLink to='/formato/DvD'> Dvd </NavLink>
      </li>
    <li >
      <CartWidget/>
    </li>
     
    </ul>
  </div>
</nav>
 );
}

export default Navbar;