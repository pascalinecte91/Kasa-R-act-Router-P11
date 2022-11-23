import Slider from "components/Slider";
import data from "data/logements.json";
import { useParams, Navigate } from "react-router";
import Dropdown from "components/Dropdown";
import Tag from "components/Tag";
import Rating from "components/Rating";
import * as locationProvider from "provider/locationProvider";

/**
 * @useParams = renvoie  la clé de l url : id
 *
 */
const FicheLocation = () => {
	const { id } = useParams();
	const ficheLocation = locationProvider.findOneLocationById(id);

	if (!ficheLocation) {
		return <Navigate to="Not-found-ERROR-404" />;
	}

	const { title, pictures, description, host, rating, location, equipments, tags } = ficheLocation;

	return (
		<>
			<Slider pictures={pictures} title={title} />

			<section className="side">
				<aside className="side__left">
					<p className="side__title side__title--first">{title}</p>
					<p className="side__title side__title--town">{location}</p>

					<div className="side__content side__content--tags">
						<Tag tags={tags} />
					</div>
					<div className="side__description">
						<Dropdown value={description} className="side__description--info" title="Description" />
					</div>
				</aside>

				<aside className="side__right">
					<div className="side__smart">
					<div className="side__detail">
						<p className="side__detail side__detail--name">{host.name}</p>
						<img className="side__detail side__detail--picture" src={host.picture} alt="photo de profil" />
					</div>
					<div className="side__stars">
						<Rating rating={rating} />
					</div>
					</div>
					<div className="side__equipments side__equipments--right ">
						<Dropdown value={equipments} title="Equipements" />
					</div>
				</aside>
			</section>
		</>
	);
};

export default FicheLocation;
