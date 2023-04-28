import React from 'react';
//component
import Store from './Components/Products/Store';
import Details from './Components/Details/Detail';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart';
//context
import ProductContextProvider from './Context/ProductContextProvider';
import CartContextProvider from './Context/cartContextProvider';
//react-router-dom
import{Routes,Route, Navigate} from "react-router-dom"

function App() {
  document.body.style = 'background: #f0f0f0';
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/product/:id" element={<Details/>}/>
          <Route path="/product" element={<Store/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/*" element={<Navigate to="/product"/>}/>
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
