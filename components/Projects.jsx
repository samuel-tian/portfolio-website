import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id="projects" className="w-full mb-6">
			<h2>Projects</h2>
			<div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
				<ProjectItem title="Trading Bot" page="/tradingbot" />
				<ProjectItem title="Ray Tracing" page="/raytracing" />
				<ProjectItem title="Monocular Depth Perception" page="/depth" />
				<ProjectItem title="Honors Summer Math Camp" page="/hsmc" />
				<ProjectItem title="Competitive Programming" page="/compprog" />
				<ProjectItem title="This Website" page="/portfolio" />
			</div>
		</div>
	);
};

export default Projects;
