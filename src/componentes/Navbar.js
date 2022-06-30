import React  from 'react';
import '../Hojas-de-estilo/peliculas.css';

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
        <a  href="index.html#carritoCompras" className="terms button" data-toggle="modal" data-target="#staticBackdrop"><i className="fas fa-shopping-cart"></i></a>
        
      </li>
    </ul>
  </div>
</nav>
 );
}

export default Navbar;