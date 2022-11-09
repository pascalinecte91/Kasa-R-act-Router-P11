import React from "react";
import Header from "../components/Header";
import Card from "./../components/Card";
import Footer from "./../components/Footer";
import { NavLink } from "react-router-dom";
import Banner from "./../components/Banner";
import Loader from './../components/Loader';


const Home = () => {
    return (
        <main>
            <NavLink />
            <Banner />
            <Loader />
        </main>
    );
};

export default Home;
