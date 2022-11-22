import React from "react";
import { NavLink } from "react-router-dom";
import logo_kasa from "assets/logo_kasa.png";

import "styles/index.scss";

const Header = () => {
    return (
        <header className="nav">
            <img src={logo_kasa} className="nav__logo" alt="Kasa" />
            <ul>
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}end>
                    {/*  end permet d'eviter les beugs sur le 1er link et empecher la propagation du isActive à son voisin  */}
                    <li className="nav__home">Accueil</li>
                </NavLink>
                <NavLink
                    to="/about"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}end>
                    <li className="nav__about">A Propos</li>
                </NavLink>
            </ul>
        </header>
    );
};

export default Header;