import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<div classname='fixed w-full h-20 shadow-xl z-[100]'>
			<div classname='flex justify-between items-center h-full px-2 2xl:px-16'>
				<div>
					<ul classname='hidden md:flex'>
						<Link href='/'>
							<li classname='ml-10 text-sm uppercase hover:border-b'>Home</li>
						</Link>
						<Link href='/'>
							<li classname='ml-10 text-sm uppercase hover:border-b'>About</li>
						</Link>
						<Link href='/'>
							<li classname='ml-10 text-sm uppercase hover:border-b'>Projects</li>
						</Link>
					</ul>
				</div>
			</div>
		</div> 
	)
}

export default Navbar