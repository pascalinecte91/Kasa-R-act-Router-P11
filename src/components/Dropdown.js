import { useState } from "react";
import "styles/index.scss";
import arrowDropdown from "assets/arrowDropdown.svg";

/**
 * && raccourci condition est true , elle sera exécutée
 */

const Dropdown = ({ title, value }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<article className={"dropdown" + (isOpen 
		? " active" 
		: "")}>
			<div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
					<h4 className="dropdown__title">{title}</h4>
							<img className="dropdown__chevron " src={arrowDropdown} alt="" />
			</div>
					<div className="dropdown__content">
							{isOpen && (typeof value === "string" 
							? (<p className="dropdown__content--value">{value}</p>) 
							: (<ul className="dropdown__content--ul">
									{value.map((text, index) => (
											<li key={index} className="dropdown__content--li">{text}</li>
								))}
									</ul>
							))}
					</div>
		</article>
	);
};

export default Dropdown;
