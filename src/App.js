import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <div className="App">
      < Navbar />
      <ItemListContainer imprimirPeliculas="Pronto Catalogo Completo!"/>

      
    </div>
  );

}

export default App;
