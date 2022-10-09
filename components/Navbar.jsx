import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className="w-full sticky top-0 h-20 z-100 bg-white">
			<div className="flex justify-end items-center h-full">
				<div>
					<ul className="flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase">Home</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
