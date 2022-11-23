import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "route/Router";
import Footer from "components/Footer";
import Header from "components/Header";

/**
 * true = de base on veut le voir
 * useEffect , un hook qui se lance au chargement
 * LA FUNCTION setTimeOut va lancer une function callBack pendant 2 sec
 */

function App() {
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 1000);
	}, []);
	return loader ? (
		<section className="spinner">
			<div className="spinner__loading"></div>
		</section>
	) : (
		<>
			<Header />
			<main className="main">
				<Router />
			</main>
			<Footer />
		</>
	);
}

export default App;
