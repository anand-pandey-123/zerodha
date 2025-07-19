import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import ProductsPage from './landing_page/products/ProductsPage';
import SupportsPage from './landing_page/support/SupportsPage';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/Login/Login';
import SignUp from './landing_page/SignUp/SignUp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
    <Navbar></Navbar>
       <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/about' element={<AboutPage></AboutPage>}></Route>
          <Route path='/products' element={<ProductsPage></ProductsPage>}></Route>
          <Route path='/pricing' element={<PricingPage></PricingPage>}></Route>
          <Route path='/support' element={<SupportsPage></SupportsPage>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
       <Footer></Footer>
    </BrowserRouter>
  
);
