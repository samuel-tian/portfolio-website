import React from "react";

const depth = () => {
	return (
		<div className="w-full">
			<h2>Ray Tracing</h2>
			<div className="flex gap-2">
				<div className="tag">Graphics</div>
				<div className="tag">Vulkan</div>
				<div className="tag">OpenGL</div>
				<div className="tag">C++</div>
			</div>
			<p>
				I am currently implementing a ray tracing engine using the Vulkan API.
				The environment allows for camera movement and rotation, dynamic
				addition and deletion of several supported solids, and control over
				various properties such as position, color, albedo, etc. Originally, I
				wrote the engine using the OpenGL API, but eventually found OpenGL to be
				unweildy and hacky for ray tracing. Thus, I made a switch to Vulkan and
				plan to add more features, including skyboxes and 3D mesh support, after
				porting is complete.
			</p>
		</div>
	);
};

export default depth;
