import React from "react";

import "styles/index.scss";


const Banner = ({ bannerHome, text }) => {
    return (
        <div className="banner">
            <img className="banner_image" src={bannerHome}></img>
            <div className="banner_text">{text}</div>
        </div>
    );
};

export default Banner;

