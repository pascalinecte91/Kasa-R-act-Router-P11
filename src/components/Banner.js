import React from "react";
import "styles/index.scss";

const Banner = ({ bannerHome, text, modifier }) => {
	return (
		<div className="banner">
			<img className={"banner__image banner__image--"+ modifier} src={bannerHome}></img>
			<div className="banner__text">{text}</div>
		</div>
	);
};

export default Banner;
