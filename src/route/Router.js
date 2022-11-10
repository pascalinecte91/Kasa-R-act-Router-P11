import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from 'pages/About/About';
import Rent from 'pages/Rent/Rent';
import NotFoundPage from 'pages/Error/NotFoundPage';
import Home from 'pages/Home/Home';


const Router = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Rent/:id" element={<Rent/>} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
    );
};

export default Router;
