
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetail from './Componentes/ItemDetail';
// import ItemList from './Componentes/ItemList';
import ItemListContainer from './Componentes/ItemListContainer';
import Index from './EstructuralComponents/Index';
import NavBar from './EstructuralComponents/NavBar';
import ItemDetailContainer from './Componentes/ItemDetailContainer';


function App() {
  return (
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
        </Routes>
      </BrowserRouter>
  );
}

export default App;
