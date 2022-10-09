import React from "react";
import ProjectItem from "./ProjectItem";

const Classes = () => {
	return (
		<div id="classes" className="w-full mb-6">
			<h2>Classes</h2>
			<div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
				<ProjectItem
					title="6.8611: Quantitative Methods for Natural Language Processing"
					page="/6861"
				/>
				<ProjectItem title="6.1910: Computation Structures" page="/6004" />
			</div>
		</div>
	);
};

export default Classes;
