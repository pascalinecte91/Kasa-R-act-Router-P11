import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './../pages/About';
import Home from './../pages/Home';
import NotFoundPage from './../pages/NotFoundPage';


const Router = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/404" element={<NotFoundPage />} />
                {/* le chemin avec * url qui ne correspond à rien de declaré au dessus */}
                <Route path="*" element={<Home />} />
            </Routes>
    );
};

export default Router;
