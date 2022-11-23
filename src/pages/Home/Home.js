import React from "react";
import Banner from "components/Banner";
import homeBanner from "assets/homeBanner.jpg";
import Gallery from "components/Gallery";

const Home = () => {
    return (
        <>
            <main>
                <Banner bannerHome={homeBanner} text=" Chez vous, Partout et Ailleurs "/>
                <Gallery />
            </main>
        </>
    );
};

export default Home;
