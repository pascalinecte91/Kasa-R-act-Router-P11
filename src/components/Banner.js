import React from "react";
import "styles/index.scss";

const Banner = ({ bannerHome, text }) => {
	return (
		<div className="banner">
			<img className="banner__image" src={bannerHome}></img>
			<div className="banner__text">{text}</div>
		</div>
	);
};

export default Banner;
