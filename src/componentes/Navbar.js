import React  from 'react';
import '../Style/peliculas.css';
import CartWidget from './CartWidget';

function Navbar () {
 return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">CinemaComics</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav" >
    <ul className="navbar-nav" >
    <li className="nav-item active" > 
        <a className="nav-link" href="#">4k</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Bluray </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Dvd</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Coleccionista</a>
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