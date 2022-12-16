import React from "react";
import { NavLink } from "react-router-dom";
import logo_kasa from "assets/logo_kasa.png";
import "styles/index.scss";

const Header = () => {
    return (
        <header className="header">
            <NavLink to={"/"}>
                <img className="nav__logo" src={logo_kasa} alt="Kasa Logo" />
            </NavLink>
            <div className="nav__link">
                <ul>
                    <li>
                        <NavLink className={({ isActive }) =>isActive 
                        ? "active" 
                        : null}to="/">Accueil
                        </NavLink>
                    </li>
                    <li><NavLink className={({ isActive }) =>isActive 
                    ? "active" 
                    : null}to="/about">A Propos
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
