import React, { useEffect, useState } from "react";

import Slider from "components/Slider";
import data from "data/logements.json";
import { useParams, useNavigate } from "react-router";

/**
 * @useParams = renvoie  la clé de l url : id
 *
 */

const FicheLocation = () => {
    const { id } = useParams();
    const location = data.find((toto) => toto.id === id);

    const { title, pictures } = location;
    //console.log(location);

    return (
        <>
            <Slider pictures={pictures} title={title} />
        </>
    );
};

export default FicheLocation;
