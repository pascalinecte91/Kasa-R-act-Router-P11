import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/index.scss";

const Header = () => {
    return (
        <header className="navigation">
                <img className="navLog" src="./logo_kasa.svg" alt="" />
            <ul>
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}end>
                    <li className="menu-home">Accueil</li>
                </NavLink>
                <NavLink
                    to="/about"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}end>
                    <li className="menu-about">A propos</li>
                </NavLink>
            </ul>
        </header>
    );
};

export default Header;
