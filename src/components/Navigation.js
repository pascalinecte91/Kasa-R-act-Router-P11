import React from 'react';
import { NavLink } from "react-router-dom";
import "../scss/index.scss";

const Navigation = () => {
    return (
        <header className="navigation">
            <ul>
        <NavLink to="/">
            <li>Accueil</li>
            </NavLink>
        <NavLink to="/about">
            <li>A Propos</li>
            </NavLink>
            </ul>    
        </header>
    );
};

export default Navigation;