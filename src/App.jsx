import './App.css';
import Navbar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import ProductItem from './components/ProductItem';
import ItemListFiltered from './components/ItemListFiltered';
import Index from './components/Index';
import db from '../db/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { CartProvider } from './context/cartContext';
import Cart from './components/Cart/Cart';
import Checkout from './Checkout';

function App() {
  return (
    <div>
    <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index></Index>} />
          <Route path="productos" element={<ItemListContainer/>} />
          <Route path="category/:idCategory" element={<ItemListContainer/>} />
          <Route path="Item/:idProduct" element={<ProductItem/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="/quienes-somos" element={<h1>Quienes somos</h1>} />
          <Route path="checkout" element = {<Checkout/>} />
        </Routes>
      </CartProvider>
        </div>
    
  )
}

export default App
