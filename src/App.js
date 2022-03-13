
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetail from './Componentes/ItemDetail';
// import ItemList from './Componentes/ItemList';
import ItemListContainer from './Componentes/ItemListContainer';
import Index from './EstructuralComponents/Index';
import NavBar from './EstructuralComponents/NavBar';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import { CartContextProvider } from './Componentes/CartContextProvider';
import Cart from './Componentes/Cart';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index element={<Index/>}></Route>
            {/* <Route path='lista' element={<ItemListContainer/>}></Route> */}
            <Route path='Categoria' element={<ItemListContainer/>}>
              <Route path=':category' element={<ItemDetailContainer/>}></Route>
            </Route>
            <Route path='materiales'>
              <Route path=':id' element={<ItemDetailContainer/>}></Route>
            </Route>
            <Route path='Carrito' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
