import React from "react";
import ProjectItem from "./ProjectItem";

const Research = () => {
	return (
		<div id="research" className="w-full mb-6">
			<h2>Research</h2>
			<div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
				<ProjectItem title="fiat-crypto" page="/fiatcrypto" />
				<ProjectItem
					title="Surgical Reinforcement Learning"
					page="/surgeryrl"
				/>
			</div>
		</div>
	);
};

export default Research;
