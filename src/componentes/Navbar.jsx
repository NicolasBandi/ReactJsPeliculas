import React  from 'react';
import '../Style/peliculas.css';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom'

function Navbar () {
 return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="nav_link" to='/' >CinemaComics</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="navbarItems" >
    <ul className="navbar-nav" >
    <li className="nav-item active" > 
    <NavLink className="navFormato" to='/formato/4k'> 4k </NavLink>
      </li>
      <li className="nav-item active">
      <NavLink className="navFormato"  to='/formato/Bluray'> Bluray </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="navFormato"  to='/formato/DvD'> Dvd </NavLink>
      </li>
    <li className="nav-item">
      <CartWidget/>
    </li>
     
    </ul>
  </div>
</nav>
 );
}

export default Navbar;