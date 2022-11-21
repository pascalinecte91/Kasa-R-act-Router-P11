import React, { useEffect, useState } from "react";
import Slider from "components/Slider";
import data from "data/logements.json";
import { useParams, useNavigate } from "react-router";
import Dropdown from "components/Dropdown";
import Tag from "components/Tag";
import Rating from "components/Rating";

/**
 * @useParams = renvoie  la clé de l url : id
 *
 */
const FicheLocation = () => {
    const { id } = useParams();
    const ficheLocation = data.find((ficheLocation) => ficheLocation.id === id);

    const { title, pictures, description, host, rating, location, equipments, tags} = ficheLocation;
   
    return (
        <>
            <Slider pictures={pictures} title={title} />
            <article class="info">
                <aside class="info__left">
                    <p className="info__lelft--title">{title}</p>
                    <p className="info__left--town">{location}</p>
                </aside>
                <aside class="info__right">
                    <p className="info__right--name">{host.name}</p>
                    <img className="info__right--picture" src={host.picture} alt="photo du loueur"/>
                </aside>
            </article>
            <div className="references">
                <Tag tags={tags} />
                <Rating rating={rating} />
            </div>
            <div className="dropdown__toggle dropdown__toggle--about">
                <Dropdown value={description} title="Description" />
                <Dropdown value={equipments} title="Equipements" />
            </div>
        </>
    );
};

export default FicheLocation;