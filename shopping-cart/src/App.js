import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
// CartContext 임포트 제거 - Zustand 사용으로 더 이상 필요 없음

function App() {
  // cart 상태와 setCart 함수 제거 - Zustand 사용으로 더 이상 필요 없음

  return (
    // CartProvider 제거 - Zustand 사용으로 더 이상 필요 없음
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
