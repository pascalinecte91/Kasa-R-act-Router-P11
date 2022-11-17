import arrowLeft from "assets/arrowLeft.svg";
import arrowRight from "assets/arrowRight.svg"; 
import { useState } from "react";
import "styles/index.scss";
import FicheLocation from "pages/FicheLocation/FicheLocation";


const Slider = ({ title, pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // je definis mes states et son setter, que j initialise à ZERO

    const indexSlideMax = pictures.length;
    //console.log("nombre:", indexSlideMax);
    // je place  la valeur dans une variable

    const previous = () => {
        setCurrentIndex((slide) => (slide - 1 < 0 ? indexSlideMax - 1 : slide - 1));
    };

    const next = () => {
        setCurrentIndex((slide) => (slide + 1 > indexSlideMax - 1 ? 0 : slide + 1));
    };

    return (
        <section className="slider">
            {indexSlideMax > 1 ? (
            <img src={arrowLeft} onClick={previous} className="slider_left" />) : 0} 
            <img src={pictures[currentIndex]} className="slider_picture" alt={title} />
    
            {indexSlideMax > 1 ? (
            <img src={arrowRight} onClick={next} className="slider_right" />
            ) : 0}
          {/*   // mon state + 1 sur indexSlideMax */}
            <span className="slider_number">
                {" "}
                {currentIndex + 1}/{indexSlideMax}
            </span>
        </section>
    );
};

export default Slider;

