
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetail from './Componentes/ItemDetail';
import ItemListContainer from './Componentes/ItemListContainer';
import Index from './EstructuralComponents/Index';
import NavBar from './EstructuralComponents/NavBar';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import { CartContextProvider } from './Componentes/CartContextProvider';
import Cart from './Componentes/Cart';
import ItemList from './Componentes/ItemList';
import CategoryItems from './Componentes/CategoryItems';


function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index element={<Index/>}></Route>
            <Route path='Lista' element={<ItemListContainer/>}/>
            <Route path='Categoria' element={<CategoryItems/>}>
              <Route path=':category' element={<CategoryItems/>}></Route>
            </Route>
            <Route path='materiales' element={<ItemDetailContainer/>}>
              <Route path=':id' element={<ItemDetailContainer/>}/>
            </Route>
            <Route path='Carrito' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
