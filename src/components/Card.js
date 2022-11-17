import { NavLink } from "react-router-dom";
import "styles/index.scss";

const Card = ({ id, picture, title }) => {
    return (
        <NavLink to={"ficheLocation/" + id}>
            <section className="card">
                <img className="card_picture" src={picture} alt="" />
                <p className="card_title">{title}</p>
            </section>
        </NavLink>
    );
};

export default Card;

