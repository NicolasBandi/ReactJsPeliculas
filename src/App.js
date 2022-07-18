import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/formato/:formatoId' element={<ItemListContainer/>}/>
    <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
  </Routes>
  </BrowserRouter>

      
    </div>
  );

}

export default App;


