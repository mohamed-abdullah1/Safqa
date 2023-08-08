import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./features/home/Home";
import BottomNav from "./components/BottomNav/BottomNav";
import { Route, Routes } from "react-router-dom";
import Categories from "./features/categories/Categories";
import Account from "./features/account/Account";
import Cart from "./features/cart/Cart";
import Topbar from "./components/TopBar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
