import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "components/Loader";
import Banner from "components/Banner";
import homeBanner from "assets/homeBanner.jpg";
import Gallery from "components/Gallery";

const Home = () => {
    return (
        <>
            <main>
                <Loader />
                <Banner bannerHome={homeBanner} text=" Chez vous, Partout et Ailleurs "/>
                <Gallery />
            </main>
        </>
    );
};

export default Home;

