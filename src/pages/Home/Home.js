import React from "react";
import Card from "components/Card";
import { NavLink } from "react-router-dom";
import Loader from 'components/Loader';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Banner from 'components/Banner';
import homeBanner from 'assets/homeBanner.jpg';



const Home = () => {
    return (
        <React.Fragment>
        <main>
            <NavLink />
            <Banner bannerHome= {homeBanner} text=" Chez vous, Partout et Ailleurs " />
            <Loader />
        </main>
        </React.Fragment >
    );
};

export default Home;
