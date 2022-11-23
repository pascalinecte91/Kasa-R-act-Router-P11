import React from "react";
import homeBanner from "assets/aboutBanner.jpg";
import Banner from "components/Banner";
import Dropdown from "components/Dropdown";
import { Navigate } from "react-router";
import * as aboutProvider from "provider/aboutProvider";
import { findAgrees } from "provider/aboutProvider";

const About = () => {
	const about = findAgrees();

	return (
		<>
			<Banner bannerHome={homeBanner} text="" />

			<section className="about">
				{about.map((a) => (
					<Dropdown key={`${a.id}`} className="about__page" title={a.title} value={[a.content]} />
				))}
			</section>
		</>
	);
};
export default About;
