import React from "react";
import { NavLink } from "react-router-dom";
import logo_kasa from "assets/logo_kasa.png";

import "styles/index.scss";

const Header = () => {
    return (
        <header className="nav">
            <img src={logo_kasa} className="nav-logo" alt="Kasa" />
            <ul>
                <NavLink
                    to="/"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                    end
                >
                    <li className="nav-home">Accueil</li>
                </NavLink>
                <NavLink
                    to="/about"
                    className={(nav) => (nav.isActive ? "nav-active" : "")}
                    end
                >
                    <li className="nav-about">A propos</li>
                </NavLink>
            </ul>
        </header>
    );
};

export default Header;
