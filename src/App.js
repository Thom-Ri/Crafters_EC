
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetail from './Componentes/ItemDetail';
// import ItemList from './Componentes/ItemList';
import ItemListContainer from './Componentes/ItemListContainer';
import Index from './EstructuralComponents/Index';
import NavBar from './EstructuralComponents/NavBar';


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index element={<Index/>}></Route>
            <Route path='lista' element={<ItemListContainer/>}></Route>
            <Route path='materiales'>
              <Route path=':materialId' element={<ItemDetail/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
