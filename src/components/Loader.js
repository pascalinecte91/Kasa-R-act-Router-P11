import React from "react";

import "styles/index.scss";

const isHidden = "true";
const Loader = () => {
    return <div className={`loading ${isHidden ? "hidden" : ""}`}>In Progress</div>;
};

export default Loader;
