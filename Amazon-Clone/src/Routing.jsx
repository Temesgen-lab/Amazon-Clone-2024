import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import Auth from "./pages/Auth/Auth";
import Results from "./pages/Results/Results";
import Layout from "./components/Layout/Layout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signIn" element={<Auth />} />
            <Route path="/category/:categoryName" element={<Results />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
