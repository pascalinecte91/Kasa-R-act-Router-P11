import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./route/Router";
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <Router />
            </main>
            <Footer />
        </BrowserRouter>
    );
}
export default App;
