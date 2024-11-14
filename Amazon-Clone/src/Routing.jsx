import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home'
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';
import Auth from './pages/Auth/Auth';

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/orders' element={<Order />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signIn' element={<Auth />} />

        </Routes>
      </Router>
    </div>
  )
}

export default Routing
