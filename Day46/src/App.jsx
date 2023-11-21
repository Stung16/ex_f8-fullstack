import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/Css/cssDetail.css"
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import CartPage from './pages/cart/CartPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/product/:page' element ={<Products />} />
          <Route path='/carts' element ={<CartPage />} />
          <Route path='/product-detail/:id' element ={<ProductDetail />} />
      </Routes> 
    </BrowserRouter>

  )
}