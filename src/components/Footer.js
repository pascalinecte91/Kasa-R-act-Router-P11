import React from "react";

import logo_kasa from "assets/logoKasaWhite.png";

const Footer = () => {
    return (
        <footer className="footer">

            <img className="footer__logo" src={logo_kasa} alt="image du bas de page"></img>
            <div className="footer__agree"><span>© {new Date().getFullYear()} Kasa. All rights reserved{" "}</span></div>
        </footer>
    );
};

export default Footer;