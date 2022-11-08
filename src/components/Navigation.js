import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/index.scss";

const Navigation = () => {
    return (
        <header className="navigation">
            <ul className="menu">
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>Accueil</li>
                </NavLink>
                <NavLink
                    to="/about"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
                    <li>A propos</li>
                </NavLink>
            </ul>
        </header>
    );
};

export default Navigation;
