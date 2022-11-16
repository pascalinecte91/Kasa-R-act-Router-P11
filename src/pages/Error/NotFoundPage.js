import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="notFound">
            <p className="error404">404</p>
            <p className="error">Oups ! La page que vous demandez n'existe pas </p>

            <NavLink to="/">
                <b> Retourner sur la page d'accueil</b>
                </NavLink>
        </div>
    );
};

export default NotFoundPage;