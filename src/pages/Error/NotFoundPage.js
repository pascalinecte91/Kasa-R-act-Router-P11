import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <h2 className="notFoundEn">Error HTTP 404 - </h2>
            <p className="error">Page Not Found </p>

            <Link to="/">
                <b> Back Home Page</b>
                </Link>
        </>
    );
};

export default NotFoundPage;