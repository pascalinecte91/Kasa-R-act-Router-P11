import data from "data/logements.json";
import FicheLocation from "pages/FicheLocation/FicheLocation";

export function findOneLocationById(id) {
	return data.find((ficheLocation) => ficheLocation.id === id);
}
