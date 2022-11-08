import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./route/Router";
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <main className="main">
                <Router />
            </main>
            <Footer />
        </BrowserRouter>
    );
}
export default App;
