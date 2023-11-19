import React, { useEffect } from 'react';
import Image from 'next/image';
import imageLoader from './lib/image_loader';

export default function ListingsBanners() {
	useEffect(() => {
		let bannerContainer = document.getElementById('banners') as HTMLDivElement,
			banners = document.querySelectorAll(
				'.banner'
			) as NodeListOf<HTMLDivElement>,
			bannerLength = banners.length,
			totalScrollWidth = bannerContainer.scrollWidth,
			singleScrollWidth = totalScrollWidth / bannerLength,
			currentBannerIndex = 1;

		let interval = setInterval(() => {
			if (currentBannerIndex > bannerLength) {
				currentBannerIndex = 1;
			}
			bannerContainer.scrollTo(singleScrollWidth * (currentBannerIndex - 1), 0);
			currentBannerIndex++;
			return () => {
				clearInterval(interval);
			};
		}, 3000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<div
			id='banners'
			className='flex overflow-hidden aspect-[3/1]'>
			<div className='banner min-w-full h-full w-full flex items-center relative justify-center'>
				<img
					className='block align-middle object-cover'
					src='/images/phones.jpg'
					alt='Phones on display'
					height={350}
					width={1020}
				/>
				<h2
					style={{
						textShadow: '0 0 10px #333333aa',
					}}
					className='font-bold text-center text-white text-3xl absolute'>
					Phones and Accessories
				</h2>
			</div>
			<div className='banner min-w-full h-full w-full flex items-center relative justify-center'>
				<img
					className='block align-middle object-cover'
					src='/images/laptops.jpg'
					alt='Phones on display'
					height={350}
					width={1020}
				/>
				<h2
					style={{
						textShadow: '0 0 10px #333333aa',
					}}
					className='font-bold text-center text-white text-3xl absolute'>
					Laptops
				</h2>
			</div>
			<div className='banner min-w-full h-full w-full flex items-center relative justify-center'>
				<img
					className='block align-middle object-cover'
					src='/images/commercial_solar_panels.jpg'
					alt='Phones on display'
					height={350}
					width={1020}
				/>
				<h2
					style={{
						textShadow: '0 0 10px #333333aa',
					}}
					className='font-bold text-center text-white text-3xl absolute'>
					Solar Panel
				</h2>
			</div>
		</div>
	);
}
