import React from "react";
import { NavLink } from "react-router-dom";
import logo_kasa from "assets/logo_kasa.png";
import "styles/index.scss";

const Header = () => {
    return (
        <header className="header">
            <NavLink to={"/Kasa-React-Router-P11"}>
                <img className="nav__logo" src={logo_kasa} alt="Kasa Logo" />
            </NavLink>
            <div className="nav__link">
                <ul>
                    <li>
                        <NavLink className={({ isActive }) =>isActive 
                        ? "active" 
                        : null}to="/Kasa-React-Router-P11">Accueil
                        </NavLink>
                    </li>
                    <li><NavLink className={({ isActive }) =>isActive 
                    ? "active" 
                    : null}to="/Kasa-React-Router-P11/about">A Propos
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
