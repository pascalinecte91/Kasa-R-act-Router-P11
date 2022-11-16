import React from "react";

import logo_kasa from "assets/logoKasaWhite.png";

const Footer = () => {
    return (
        <footer className="footer">

            <img className="footer_logo" src={logo_kasa} alt="image du bas de page"></img>
            <div className="footer_agree"><span>© {new Date().getFullYear()} Kasa. All rights reserved{" "}</span></div>
        </footer>
    );
};

export default Footer;
