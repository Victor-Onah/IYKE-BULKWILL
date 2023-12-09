import React from 'react';
import Logo from './logo';
import { FaBars, FaX } from 'react-icons/fa6';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
	let [isMenuOpen, setIsMenuOpen] = useState(false);
	useEffect(() => {
		let headerHeight = 150,
			header = document.getElementById('header') as HTMLHeadingElement;
		function colorHeaderBackground() {
			let scrollRatio = window.scrollY / headerHeight;
			if (scrollRatio >= 1) {
				header.style.backgroundColor = `rgba(255, 255, 255, 1)`;
			} else if (scrollRatio < 1) {
				header.style.backgroundColor = `rgba(255, 255, 255, ${scrollRatio})`;
			} else return;
		}
		window.addEventListener('scroll', colorHeaderBackground);
		return () => {
			window.removeEventListener('click', colorHeaderBackground);
		};
	}, []);
	return (
		<header
			id='header'
			className='fixed top-0 w-full left-0 bg-transparent flex justify-between p-4 items-center md:pr-16 z-50'>
			<Logo />
			<nav>
				<div
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-hidden='true'
					className='md:hidden h-8 w-8 rounded-full flex justify-center items-center active:bg-slate-50 z-50'>
					{isMenuOpen ? <FaX /> : <FaBars />}
				</div>
				<ul
					className={`${isMenuOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'
						} transition-transform flex max-md:flex-col gap-4 font-bold max-md:fixed max-md:w-full max-md:bg-white max-md:right-0 max-md:top-[56px] max-md:bottom-0 max-md:p-4`}>
					<li>
						<Link
							onClick={() => setTimeout(() => setIsMenuOpen(false), 500)}
							className='px-4 py-2 rounded hover:bg-blue-700 hover:text-white active:scale-95 block hover:shadow-lg'
							href='/'>
							Home
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setTimeout(() => setIsMenuOpen(false), 500)}
							className='px-4 py-2 rounded hover:bg-blue-700 hover:text-white active:scale-95 block hover:shadow-lg'
							href='/about'>
							About Us
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setTimeout(() => setIsMenuOpen(false), 500)}
							className='px-4 py-2 rounded hover:bg-blue-700 hover:text-white active:scale-95 block hover:shadow-lg'
							href='/contact'>
							Contact Us
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setTimeout(() => setIsMenuOpen(false), 500)}
							className='px-4 py-2 rounded hover:bg-blue-700 hover:text-white active:scale-95 block hover:shadow-lg'
							href='/listings'>
							Listings
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
