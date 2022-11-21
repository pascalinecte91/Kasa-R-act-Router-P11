import { useState } from 'react';
import "styles/index.scss";
import arrowDropdown from "assets/arrowDropdown.svg";

/**
 * && raccourci condition est true , elle sera exécutée
 */

const Dropdown = ({ title, value }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownToggle = () => {setIsOpen(!isOpen);
    };

    return (
        <article className={"dropdown" + (isOpen ? " active" : "")}>
            <div className="dropdown__header dropdown__header--aboutH" onClick={() => setIsOpen(!isOpen)}>
            <h4>{title}</h4>
            <img className="dropdown__chevron dropdown__chevron" src={arrowDropdown} alt="" />
            </div>
            {isOpen && <p className="dropdown__content dropdown__content--aboutCo">{value}</p>}
        </article>
    );
};

export default Dropdown; 