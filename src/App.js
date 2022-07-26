import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './componentes/CartContext';
import Cart from './componentes/Cart';


function App() {
  return (
  <CartContextProvider>
    <div className="App">
   <BrowserRouter>
   <Navbar/>
  <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/formato/:formatoId' element={<ItemListContainer/>}/>
    <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
    <Route path='/cart' element={<Cart/>}/>
  </Routes>
  </BrowserRouter>
</div>
  </CartContextProvider>
  );

}

export default App;


