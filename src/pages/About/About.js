import React from "react";

import Loader from "components/Loader";
import homeBanner from "assets/aboutBanner.jpg";
import Banner from "components/Banner";
import Dropdown from "components/Dropdown";

const About = () => {
    const reglement = ["Fiabilité", "Respect", "Service", "Responsabilité"];

    const content = [
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    ];

    return (
        <>
            <Banner bannerHome={homeBanner} text="" />

            <Loader />
            <section className="about__page ">
                
                {reglement.map((title, value) => (
                <Dropdown key={`${title}-${value}`} title={title} value={content[value]} />
                ))}
   
            </section>
        </>
    );
};
export default About;
