import React from 'react';
import { Route,Routes  } from 'react-router-dom'
import Cart from './Cart/Cart';
import Menu from './Menu/Menu';

function PageRoutes(props) {
    return (
      <Routes>
         <Route exact path="/" element={<Menu/>} />
         <Route exact path="/checkout" element={<Cart/>} />
      </Routes>
    );
}

export default PageRoutes;