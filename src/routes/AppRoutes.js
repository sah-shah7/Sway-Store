import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import HomePage from "../pages/home/HomePage.js";
import ProductPage from "../pages/ProductPage/ProductPage.js";
import Mockman from 'mockman-js';


const AppRoutes = () =>{
    return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/mock" element={<Mockman />} />
          </Routes>
        </Router>
    );
};

export default AppRoutes;