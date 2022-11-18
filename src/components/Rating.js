import React from "react";
import FicheLocation from "pages/FicheLocation/FicheLocation";
import starGrey from "assets/starGrey.png";
import starRed from "assets/starRed.png";

const Rating = ({ rating }) => {
   
    const rateStars = [1, 2, 3, 4, 5];
 
    return (
        <div className="references_stars">
            {rateStars.map((ref, i) =>
                ref <= rating 
                ? (
                    <img src={starRed} alt="star" key={i} />) 
                : (
                    <img src={starGrey} alt="star" key={i} />
                )
            )}
        </div>
    );
};

export default Rating;
