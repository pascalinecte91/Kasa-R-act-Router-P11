import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from 'pages/About/About';
import FicheLocation from 'pages/FicheLocation/FicheLocation';
import NotFoundPage from 'pages/Error/NotFoundPage';
import Home from 'pages/Home/Home';



const Router = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Kasa-React-Router-P11" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/FicheLocation/:id" element={<FicheLocation/>} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
    );
};

export default Router;
