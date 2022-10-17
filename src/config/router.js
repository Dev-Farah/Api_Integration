import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Importing All Pages
import Home from "../screens/home";
import ProductDetails from "../screens/productdetails";
import NotFound from "../screens/notfound";

export default function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="ProductDetails" element={<ProductDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}