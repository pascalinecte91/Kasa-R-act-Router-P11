import { NavLink } from "react-router-dom";
import "styles/index.scss";

const Card = ({ id, picture, title }) => {
    return (
        <NavLink to={"ficheLocation/" + id}>
            <section className="card">
                <img className="card__picture" src={picture} alt="" />
                <p className="card__title">{title}</p>
            </section>
        </NavLink>
    );
};

export default Card;

