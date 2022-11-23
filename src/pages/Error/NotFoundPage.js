import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="notFound">
			<p className="notFound__error">404</p>
			<p className="notFound__text">Oups ! La page que vous demandez n'existe pas </p>

			<NavLink to="/">
				<b> Retourner sur la page d'accueil</b>
			</NavLink>
		</div>
	);
};

export default NotFoundPage;
