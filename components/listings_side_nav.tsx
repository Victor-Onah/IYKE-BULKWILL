import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import Link from 'next/link';

export default function ListingsSideNav() {
	let [priceRange, setPriceRange] = useState([40000, 60000]) as unknown as [
		[number, number],
		(value: [number | string, number | string]) => [number, number]
	];
	useEffect(() => {
		let priceRangeSlider = document.getElementById(
				'price-range-slider'
			) as HTMLDivElement,
			priceRangeSliderSlide = document.getElementById(
				'price-range-slider-slide'
			) as HTMLDivElement,
			priceRangeSliderBtn1 = document.getElementById(
				'price-range-slider-btn-1'
			) as HTMLSpanElement,
			priceRangeSliderBtn2 = document.getElementById(
				'price-range-slider-btn-2'
			) as HTMLSpanElement,
			totalSliderWidth = priceRangeSlider.clientWidth,
			currentSlideWidth = priceRangeSliderSlide.clientWidth,
			sliderStartPoint = priceRangeSlider.getBoundingClientRect().left,
			sliderEndPoint = sliderStartPoint + priceRangeSlider.clientWidth,
			slideMargin = 0,
			lastBtn1Position =
				priceRangeSliderSlide.getBoundingClientRect().left + currentSlideWidth,
			lastBtn2Position = priceRangeSliderSlide.getBoundingClientRect().left,
			input1 = document.getElementById('input-1') as HTMLInputElement,
			input2 = document.getElementById('input-2') as HTMLInputElement;

		/**
		 * Grabs the second slider button (the one on the right) using the mouse
		 */
		function grabSliderBtn1ByMouse({ pageX }: MouseEvent): void {
			// Reinitialize the variables
			currentSlideWidth = priceRangeSliderSlide.clientWidth;
			totalSliderWidth = priceRangeSlider.clientWidth;
			sliderStartPoint = priceRangeSlider.getBoundingClientRect().left;
			sliderEndPoint = sliderStartPoint + priceRangeSlider.clientWidth;
			slideMargin =
				priceRangeSliderSlide.getBoundingClientRect().left - sliderStartPoint;
			lastBtn1Position = pageX;

			priceRangeSliderBtn1.addEventListener('mousemove', moveSliderBtn1ByMouse);
		}
		/**
		 * Controls the movement of the second slider using a mouse.
		 */
		function moveSliderBtn1ByMouse({ pageX }: MouseEvent): void {
			let currentGrabPosition = pageX - lastBtn1Position;
			if (
				slideMargin + currentSlideWidth + currentGrabPosition >=
				totalSliderWidth
			) {
				priceRangeSliderSlide.style.width = `${
					totalSliderWidth - slideMargin
				}px`;
				updatePriceRange();
				return;
			}
			priceRangeSliderSlide.style.width = `${
				currentSlideWidth + currentGrabPosition
			}px`;
			updatePriceRange();
		}
		/**
		 * Realeases the second button using the mouse
		 */
		function releaseSliderBtn1({ pageX }: MouseEvent) {
			// Reinitialize the variables
			currentSlideWidth = priceRangeSliderSlide.clientWidth;
			totalSliderWidth = priceRangeSlider.clientWidth;
			sliderStartPoint = priceRangeSlider.getBoundingClientRect().left;
			sliderEndPoint = sliderStartPoint + priceRangeSlider.clientWidth;
			slideMargin =
				priceRangeSliderSlide.getBoundingClientRect().left - sliderStartPoint;
			lastBtn1Position = pageX;
			priceRangeSliderBtn1.removeEventListener(
				'mousemove',
				moveSliderBtn1ByMouse
			);
		}
		/**
		 * Grabs the second slider button by touch movement
		 */
		function grabSliderBtn1ByTouch({ touches }: TouchEvent): void {
			// Reinitialize the variables
			currentSlideWidth = priceRangeSliderSlide.clientWidth;
			totalSliderWidth = priceRangeSlider.clientWidth;
			sliderStartPoint = priceRangeSlider.getBoundingClientRect().left;
			sliderEndPoint = sliderStartPoint + priceRangeSlider.clientWidth;
			slideMargin =
				priceRangeSliderSlide.getBoundingClientRect().left - sliderStartPoint;
			lastBtn1Position = touches[0].clientX;

			priceRangeSliderBtn1.addEventListener('touchmove', moveSliderBtn1ByTouch);
		}
		/**
		 * Move the second slider button by touch
		 */
		function moveSliderBtn1ByTouch({ touches }: TouchEvent): void {
			let currentGrabPosition = touches[0].clientX - lastBtn1Position;
			if (
				slideMargin + currentSlideWidth + currentGrabPosition >=
				totalSliderWidth
			) {
				priceRangeSliderSlide.style.width = `${
					totalSliderWidth - slideMargin
				}px`;
				updatePriceRange();
				lastBtn1Position = touches[0].clientX;
				return;
			}
			priceRangeSliderSlide.style.width = `${
				currentSlideWidth + currentGrabPosition
			}px`;
			updatePriceRange();
			// lastBtn1Position = touches[0].clientX;
		}
		/**
		 * Releases the second slider button
		 */
		function releaseSliderBtn1ByTouch({ touches }: TouchEvent): void {
			// Reinitialize the variables
			currentSlideWidth = priceRangeSliderSlide.clientWidth;
			totalSliderWidth = priceRangeSlider.clientWidth;
			sliderStartPoint = priceRangeSlider.getBoundingClientRect().left;
			sliderEndPoint = sliderStartPoint + priceRangeSlider.clientWidth;
			slideMargin =
				priceRangeSliderSlide.getBoundingClientRect().left - sliderStartPoint;
			// lastBtn1Position = touches[0].clientX;

			priceRangeSliderBtn1.removeEventListener(
				'touchmove',
				moveSliderBtn1ByTouch
			);
		}
		/**
		 * Grabs the first slider button (the one on the left) using the mouse
		 */
		function grabSliderBtn2ByMouse({ pageX }: MouseEvent): void {
			// Reinitialize the variables
			currentSlideWidth = priceRangeSliderSlide.clientWidth;
			totalSliderWidth = priceRangeSlider.clientWidth;
			sliderStartPoint = priceRangeSlider.getBoundingClientRect().left;
			sliderEndPoint = sliderStartPoint + priceRangeSlider.clientWidth;
			slideMargin =
				priceRangeSliderSlide.getBoundingClientRect().left - sliderStartPoint;
			lastBtn2Position = pageX;

			priceRangeSliderBtn2.addEventListener('mousemove', moveSliderBtn2ByMouse);
		}
		/**
		 * Controls the movement of the first slider using a mouse.
		 */
		function moveSliderBtn2ByMouse({ pageX }: MouseEvent): void {
			priceRangeSliderSlide.style.marginLeft = `${
				pageX - sliderStartPoint < 0 ? 0 : pageX - sliderStartPoint
			}px`;
			priceRangeSliderSlide.style.width = `${
				currentSlideWidth - (pageX - lastBtn2Position) > totalSliderWidth
					? totalSliderWidth
					: currentSlideWidth - (pageX - lastBtn2Position)
			}px`;
			updatePriceRange();
		}
		/**
		 * Realeases the first button using the mouse
		 */
		function releaseSliderBtn2({ pageX }: MouseEvent): void {
			// Reinitialize the variables
			currentSlideWidth = priceRangeSliderSlide.clientWidth;
			totalSliderWidth = priceRangeSlider.clientWidth;
			sliderStartPoint = priceRangeSlider.getBoundingClientRect().left;
			sliderEndPoint = sliderStartPoint + priceRangeSlider.clientWidth;
			slideMargin =
				priceRangeSliderSlide.getBoundingClientRect().left - sliderStartPoint;
			lastBtn2Position = priceRangeSliderSlide.getBoundingClientRect().left;

			priceRangeSliderBtn2.removeEventListener(
				'mousemove',
				moveSliderBtn2ByMouse
			);
		}
		/**
		 * Grabs the first slider button (the one on the left) by touch movement
		 */
		function grabSliderBtn2ByTouch({ touches }: TouchEvent): void {
			// Reinitialize the variables
			currentSlideWidth = priceRangeSliderSlide.clientWidth;
			totalSliderWidth = priceRangeSlider.clientWidth;
			sliderStartPoint = priceRangeSlider.getBoundingClientRect().left;
			sliderEndPoint = sliderStartPoint + priceRangeSlider.clientWidth;
			slideMargin =
				priceRangeSliderSlide.getBoundingClientRect().left - sliderStartPoint;
			lastBtn2Position = touches[0].pageX;

			priceRangeSliderBtn2.addEventListener('touchmove', moveSliderBtn2ByTouch);
		}
		/**
		 * Controls the movement of the first slider using a mouse.
		 */
		function moveSliderBtn2ByTouch({ touches }: TouchEvent): void {
			priceRangeSliderSlide.style.marginLeft = `${
				touches[0].pageX - sliderStartPoint < 0
					? 0
					: touches[0].pageX - sliderStartPoint
			}px`;
			priceRangeSliderSlide.style.width = `${
				currentSlideWidth - (touches[0].pageX - lastBtn2Position) >
				totalSliderWidth
					? totalSliderWidth
					: currentSlideWidth - (touches[0].pageX - lastBtn2Position)
			}px`;
			updatePriceRange();
		}
		/**
		 * Realeases the first button using the touch
		 */
		function releaseSliderBtn2ByTouch(): void {
			// Reinitialize the variables
			currentSlideWidth = priceRangeSliderSlide.clientWidth;
			totalSliderWidth = priceRangeSlider.clientWidth;
			sliderStartPoint = priceRangeSlider.getBoundingClientRect().left;
			sliderEndPoint = sliderStartPoint + priceRangeSlider.clientWidth;
			slideMargin =
				priceRangeSliderSlide.getBoundingClientRect().left - sliderStartPoint;
			lastBtn2Position = priceRangeSliderSlide.getBoundingClientRect().left;

			priceRangeSliderBtn2.removeEventListener(
				'touchmove',
				moveSliderBtn2ByTouch
			);
		}
		/**
		 * Updates the slider if the user decides to type in the values themselves
		 */
		function updateSlider(): void {
			priceRangeSliderSlide.style.marginLeft = `${
				Number(input1.value) * (totalSliderWidth / 500000) < 0
					? 0
					: Number(input1.value) * (totalSliderWidth / 500000)
			}px`;
			priceRangeSliderSlide.style.width = `${
				(Number(input2.value) - Number(input1.value)) *
					(totalSliderWidth / 500000) <=
				0
					? 0
					: (Number(input2.value) - Number(input1.value)) *
							(totalSliderWidth / 500000) +
							slideMargin >
					  totalSliderWidth
					? totalSliderWidth - slideMargin
					: (Number(input2.value) - Number(input1.value)) *
					  (totalSliderWidth / 500000)
			}px`;

			// Reinitialize the variables
			currentSlideWidth = priceRangeSliderSlide.clientWidth;
			totalSliderWidth = priceRangeSlider.clientWidth;
			sliderStartPoint = priceRangeSlider.getBoundingClientRect().left;
			sliderEndPoint = sliderStartPoint + priceRangeSlider.clientWidth;
			slideMargin =
				priceRangeSliderSlide.getBoundingClientRect().left - sliderStartPoint;
			lastBtn2Position = priceRangeSliderSlide.getBoundingClientRect().left;
		}
		/**
		 * Update price range with slider
		 */
		function updatePriceRange(): void {
			slideMargin =
				priceRangeSliderSlide.getBoundingClientRect().left - sliderStartPoint;
			setPriceRange([
				Math.floor((500000 / totalSliderWidth) * slideMargin),
				Math.floor(
					(priceRangeSliderSlide.clientWidth + slideMargin) /
						(totalSliderWidth / 500000)
				),
			]);
		}
		/**
		 * Updates the slider when user changes the values in the input box 1
		 */
		function updatePriceRange2(): void {
			updateSlider();
		}
		/**
		 * Updates the slider when user changes the values in the input box 1
		 */
		function updatePriceRange1(): void {
			updateSlider();
		}

		updateSlider();

		priceRangeSliderBtn1.addEventListener('mousedown', grabSliderBtn1ByMouse);
		priceRangeSliderBtn1.addEventListener('mouseup', releaseSliderBtn1);
		priceRangeSliderBtn1.addEventListener('mouseleave', releaseSliderBtn1);
		priceRangeSliderBtn1.addEventListener('touchstart', grabSliderBtn1ByTouch);
		priceRangeSliderBtn1.addEventListener('touchend', releaseSliderBtn1ByTouch);
		priceRangeSliderBtn1.addEventListener(
			'touchcancel',
			releaseSliderBtn1ByTouch
		);
		priceRangeSliderBtn2.addEventListener('mousedown', grabSliderBtn2ByMouse);
		priceRangeSliderBtn2.addEventListener('mouseup', releaseSliderBtn2);
		priceRangeSliderBtn2.addEventListener('mouseleave', releaseSliderBtn2);
		priceRangeSliderBtn2.addEventListener('touchstart', grabSliderBtn2ByTouch);
		priceRangeSliderBtn2.addEventListener('touchend', releaseSliderBtn2ByTouch);
		priceRangeSliderBtn2.addEventListener(
			'touchcancel',
			releaseSliderBtn2ByTouch
		);
		input1.addEventListener('keyup', updatePriceRange1);
		input2.addEventListener('keyup', updatePriceRange2);

		return () => {
			priceRangeSliderBtn1.removeEventListener(
				'mousedown',
				grabSliderBtn1ByMouse
			);
			priceRangeSliderBtn1.removeEventListener('mouseup', releaseSliderBtn1);
			priceRangeSliderBtn1.removeEventListener('mouseleave', releaseSliderBtn1);
			priceRangeSliderBtn1.removeEventListener(
				'touchstart',
				grabSliderBtn1ByTouch
			);
			priceRangeSliderBtn1.removeEventListener(
				'touchend',
				releaseSliderBtn1ByTouch
			);
			priceRangeSliderBtn1.removeEventListener(
				'touchcancel',
				releaseSliderBtn1ByTouch
			);
			priceRangeSliderBtn2.removeEventListener(
				'mousedown',
				grabSliderBtn2ByMouse
			);
			priceRangeSliderBtn2.removeEventListener('mouseup', releaseSliderBtn2);
			priceRangeSliderBtn2.removeEventListener('mouseleave', releaseSliderBtn2);
			priceRangeSliderBtn2.removeEventListener(
				'touchstart',
				grabSliderBtn2ByTouch
			);
			priceRangeSliderBtn2.removeEventListener(
				'touchend',
				releaseSliderBtn2ByTouch
			);
			priceRangeSliderBtn2.removeEventListener(
				'touchcancel',
				releaseSliderBtn2ByTouch
			);
			input1.removeEventListener('keyup', updatePriceRange1);
			input2.removeEventListener('keyup', updatePriceRange2);
		};
	}, []);
	return (
		<aside className='lg:sticky top-[77px] lg:float-left left-4 h-fit bottom-4 shadow-lg p-4 overflow-auto lg:w-[350px] bg-white'>
			<div></div>
			<section className='mt-8'>
				<h2 className='font-bold text-lg text-slate-700'>Categories</h2>
				<ul className='mt-2 flex lg:flex-wrap gap-2 overflow-auto'>
					<li className='px-2 py-1 whitespace-nowrap block text-center text-sm font-semibold bg-blue-500 text-white rounded-full border-2 border-blue-500'>
						All
					</li>
					<li className='px-2 py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-500'>
						Solar Panels
					</li>
					<li className='px-2 py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-500'>
						CCTVs
					</li>
					<li className='px-2 py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-500'>
						Security Lighs
					</li>
					<li className='px-2 py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-500'>
						Phones
					</li>
					<li className='px-2 py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-500'>
						Laptops
					</li>
				</ul>
			</section>
			<section className='mt-8'>
				<h2 className='font-bold text-lg text-slate-700'>Prices Ranges</h2>
				<ul className='mt-2 flex lg:flex-wrap gap-2 overflow-auto'>
					<li className='border-2 whitespace-nowrap border-blue-500 rounded-full font-semibold px-2 py-1'>
						<b>N</b>1, 000 - <b>N</b>20, 000
					</li>
					<li className='border-2 whitespace-nowrap border-blue-500 rounded-full font-semibold px-2 py-1 bg-blue-500 text-white'>
						<b>N</b>20, 000 - <b>N</b>40, 000
					</li>
					<li className='border-2 whitespace-nowrap border-blue-500 rounded-full font-semibold px-2 py-1'>
						<b>N</b>40, 000 - <b>N</b>60, 000
					</li>
				</ul>
				<h4 className='font-semibold text-slate-700 mt-2'>
					Select a custom price range
				</h4>
				<div
					className=' flex flex-wrap gap-4 items-center'
					aria-hidden='true'>
					<div
						id='price-range-slider'
						className='h-2 w-full max-w-[250px] bg-zinc-300 mt-2 rounded-full'>
						<div
							id='price-range-slider-slide'
							className='bg-sky-500 w-1/2 h-full rounded-full relative'>
							<span
								id='price-range-slider-btn-1'
								className='h-4 w-4 absolute hover:scale-[200%] rounded-full bg-blue-500 shadow-lg top-1/2 -translate-y-1/2 -translate-x-1/2 left-full hover:bg-blue-800 active:bg-blue-700'></span>
							<span
								id='price-range-slider-btn-2'
								className='h-4 w-4 absolute hover:scale-[200%] rounded-full bg-blue-500 shadow-lg top-1/2 -translate-y-1/2 right-full translate-x-1/2 hover:bg-blue-800 active:bg-blue-700'></span>
						</div>
					</div>
					<div className='flex gap-2 items-center'>
						<input
							id='input-1'
							onChange={(e: any) => {
								setPriceRange([e.target.value, priceRange[1]]);
							}}
							max={500000}
							min={0}
							value={priceRange[0]}
							className='border border-[1px] rounded block max-w-[100px] p-2 text-sm outline-blue-500 focus:border-none'
							type='number'
						/>{' '}
						-
						<input
							id='input-2'
							onChange={(e: any) => {
								setPriceRange([priceRange[0], e.target.value]);
							}}
							min={priceRange[0]}
							value={priceRange[1]}
							className='border border-[1px] rounded block max-w-[100px] p-2 text-sm outline-blue-500 focus:border-none'
							type='number'
						/>
					</div>
				</div>
			</section>
		</aside>
	);
}
