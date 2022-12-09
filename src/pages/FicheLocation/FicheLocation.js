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

			<section className="location">
					<div className="location__content">
						<p className="location__title">{title}</p>
						<p className="location__location">{location}</p>
						<div className="location__tags">
							<Tag tags={tags} />
						</div>
					</div>
					<div className="location__profil">
						<div className="location__host">
							<h3>{host.name}</h3>
							<img src={host.picture} alt={host.name} />
						</div>
						<Rating rating={rating} />
					</div>
				</section>
				<div className="location__info">
				<Dropdown value={description} modifier="ficheLocation" title="Description" />
				<Dropdown value={equipments} modifier="ficheLocation" title="Equipements" />
					</div>
			
		</>
	);
};

export default FicheLocation;
