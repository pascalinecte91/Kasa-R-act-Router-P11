import React, { useEffect, useState } from "react";
import data from "data/logements.json";
import Card from "components/Card";
import "styles/index.scss";

const Gallery = () => {
    return (
        <section className="gallery">
            {data.map((rent) => (
                <Card
                    key={rent.id}
                    id={rent.id}
                    picture={rent.cover}
                    title={rent.title}
                ></Card>
            ))}
        </section>
    );
};

export default Gallery;
