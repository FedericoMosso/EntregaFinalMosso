import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CartProvider from './context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
      <Route path='/Cart' element= { <Cart />} />
      <Route path='/detalle/:detalleId' element= {<ItemDetailContainer />} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
