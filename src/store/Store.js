import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Home from "../pages/Home";
import Basket from "../pages/Basket";
import Products from "../pages/Products";
  
function Store() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/basket" element={<Basket/>}></Route>
          <Route path="/products/:category" element={<Products/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Store;
