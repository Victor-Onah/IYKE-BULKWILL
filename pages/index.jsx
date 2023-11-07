import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaAngleLeft, FaAngleRight, FaPhone } from 'react-icons/fa6';

export default function Home() {
	useEffect(() => {
		let carousel = document.getElementById('carousel-slider'),
			nextBtn = document.getElementById('right'),
			prevBtn = document.getElementById('left'),
			items = carousel.childNodes.length,
			scrollWidth = carousel.scrollWidth,
			widthPerItem = scrollWidth / items,
			activeIndex = 1,
			end = 0,
			start = 0,
			currentScrollPosition = 0;

		console.log(widthPerItem, scrollWidth);
		carousel.addEventListener('mousedown', grabCarousel);
		carousel.addEventListener('mouseup', clearEvents);
		carousel.addEventListener('touchstart', touchGrabCarousel);
		carousel.addEventListener('touchend', clearTouchEvents);
		carousel.addEventListener('touchcancel', resumeAutoPlay);
		carousel.addEventListener('mouseenter', pauseAutoPlay);
		carousel.addEventListener('mouseleave', resumeAutoPlay);
		nextBtn.addEventListener('click', showNextSlide);
		prevBtn.addEventListener('click', showPrevSlide);

		let autoplay = setInterval(function () {
			if (activeIndex >= 1 && activeIndex < items) showNextSlide();
			else {
				activeIndex = 1;
				showPrevSlide();
			}
		}, 4000);
		function pauseAutoPlay() {
			clearInterval(autoplay);
		}
		function resumeAutoPlay() {
			autoplay = setInterval(function () {
				if (activeIndex >= 1 && activeIndex < items) showNextSlide();
				else {
					activeIndex = 1;
					showPrevSlide();
				}
			}, 4000);
		}
		function showNextSlide() {
			activeIndex++;
			updateCarousel();
		}
		function showPrevSlide() {
			activeIndex--;
			updateCarousel();
		}
		function touchGrabCarousel(e) {
			pauseAutoPlay();
			start = e.touches[0].clientX;
			currentScrollPosition = carousel.scrollLeft;
			carousel.style.cursor = 'grabbing';
			carousel.addEventListener('touchmove', touchMoveCarousel);
			carousel.addEventListener('touchend', clearTouchEvents);
		}
		function touchMoveCarousel(e) {
			pauseAutoPlay();
			if (start > e.touches[0].pageX) {
				carousel.scrollLeft =
					currentScrollPosition + (start - e.touches[0].pageX);
			} else {
				carousel.scrollLeft =
					currentScrollPosition - (e.touches[0].pageX - start);
			}
			end = e.touches[0].pageX;
		}
		function clearTouchEvents(e) {
			resumeAutoPlay();
			if (start - end > 100) activeIndex++;
			if (end - start > 100) activeIndex--;
			carousel.removeEventListener('touchmove', touchMoveCarousel);
			updateCarousel();
		}
		function updateCarousel() {
			if (activeIndex <= 1) activeIndex = 1;
			if (activeIndex >= items) activeIndex = items;
			carousel.scrollLeft = widthPerItem * (activeIndex - 1);
		}
		function grabCarousel(e) {
			start = e.pageX;
			currentScrollPosition = carousel.scrollLeft;
			carousel.style.cursor = 'grabbing';
			carousel.addEventListener('mousemove', moveCarousel);
		}
		function clearEvents(e) {
			carousel.style.cursor = 'grab';
			end = e.pageX;
			if (start - end > 100) activeIndex++;
			if (end - start > 100) activeIndex--;
			carousel.removeEventListener('mousemove', moveCarousel);
			updateCarousel();
		}
		function moveCarousel(e) {
			if (start > e.pageX) {
				carousel.scrollLeft = currentScrollPosition + (start - e.pageX);
			} else {
				carousel.scrollLeft = currentScrollPosition - (e.pageX - start);
			}
		}
		return () => {
			carousel.removeEventListener('mouseup', clearEvents);
			carousel.removeEventListener('mousedown', grabCarousel);
			carousel.removeEventListener('touchstart', touchGrabCarousel);
			carousel.removeEventListener('touchend', clearTouchEvents);
			carousel.removeEventListener('mouseenter', pauseAutoPlay);
			carousel.removeEventListener('mouseleave', resumeAutoPlay);
			nextBtn.removeEventListener('click', showNextSlide);
			prevBtn.removeEventListener('click', showPrevSlide);
			carousel.removeEventListener('touchcancel', resumeAutoPlay);
		};
	}, []);
	return (
		<main id='home'>
			{/* Legend */}
			<div
				className=' flex pt-[90px] pb-[50px] px-4 flex-col justify-center gap-4 text-center text-blue-900'
				id='legend'>
				<h1
					style={{ fontFamily: 'Playfair Display' }}
					className='text-6xl font-bold capitalize max-md:text-4xl flex justify-center flex-wrap gap-2'>
					<img
						src='/images/logo.png'
						height={70}
						width={70}
					/>{' '}
					Iyke-Bulkwill Intn'l Ltd.
				</h1>
				<div>
					<h3 className='text-lg font-semibold'>We Deal On</h3>
					<p className='flex justify-center'>
						Solar and CCTV | Installations | Real Estate Agent | Sales of Phones
						and Laptops | General Merchants
					</p>
					<p className='flex justify-center gap-2 mt-4'>
						<a
							className='flex gap-1 items-center'
							href='tel:+2348038022220'>
							<FaPhone /> 0803 802 2220
						</a>{' '}
						|
						<a
							className='flex gap-1 items-center'
							href='tel:+2348038022220'>
							<FaPhone /> 0803 802 2220
						</a>
					</p>
				</div>
				<Link
					className='block w-fit mx-auto px-4 py-2 rounded hover:shadow-lg active:scale-95 text-white bg-blue-500'
					href='/'>
					Check out our listings
				</Link>
			</div>
			{/* Legend */}

			{/* Carousel */}
			<div className='p-4 relative max-w-6xl m-auto'>
				<h2 className='text-lg text-slate-600 font-bold'>
					Take a sneak peek at some of our exclusive offers
				</h2>
				<div
					id='carousel-slider'
					className='flex gap-4 overflow-hidden cursor-grab py-2 relative'>
					<div className='carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none'>
						<Image
							height={400}
							width={400}
							className='object-cover aspect-video block align-middle m-auto rounded-sm'
							src='/images/product_1.jpg'
							alt=''
						/>
						<div>
							<p className='text-sm capitalize'>
								LED 2500W solar street light - 2500 watts - all in one
							</p>
							<h3 className='font-semibold font-gray-800'>N32, 000</h3>
							<button className='bg-blue-500 text-white text-center block w-full rounded active:scale-95 px-4 py-2 pointer-events-auto z-50'>
								Add to cart
							</button>
						</div>
					</div>
					<div className='carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none'>
						<Image
							height={400}
							width={400}
							className='object-cover aspect-video block align-middle m-auto rounded-sm'
							src='/images/product_2.jpg'
							alt=''
						/>
						<div>
							<p className='text-sm capitalize'>
								duravolt 10 watts 9V mono solar panel (for rechargeable fans)
							</p>
							<h3 className='font-semibold font-gray-800'>N10, 000</h3>
							<button className='bg-blue-500 text-white text-center block w-full rounded active:scale-95 px-4 py-2 pointer-events-auto z-50'>
								Add to cart
							</button>
						</div>
					</div>
					<div className='carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none'>
						<Image
							height={400}
							width={400}
							className='object-cover aspect-video block align-middle m-auto rounded-sm'
							src='/images/product_3.jpg'
							alt=''
						/>
						<div>
							<p className='text-sm capitalize'>
								panel 350 watts crystaline solar panel 24V
							</p>
							<h3 className='font-semibold font-gray-800'>N95, 000</h3>
							<button className='bg-blue-500 text-white text-center block w-full rounded active:scale-95 px-4 py-2 pointer-events-auto z-50'>
								Add to cart
							</button>
						</div>
					</div>
					<div className='carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none'>
						<Image
							height={400}
							width={400}
							className='object-cover aspect-video block align-middle m-auto rounded-sm'
							src='/images/product_4.jpg'
							alt=''
						/>
						<div>
							<p className='text-sm capitalize'>
								4000 watts [24/36/48v] mono solar panels
							</p>
							<h3 className='font-semibold font-gray-800'>N102, 000</h3>
							<button className='bg-blue-500 text-white text-center block w-full rounded active:scale-95 px-4 py-2 pointer-events-auto z-50'>
								Add to cart
							</button>
						</div>
					</div>
					<div className='carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none'>
						<Image
							height={400}
							width={400}
							className='object-cover aspect-video block align-middle m-auto rounded-sm'
							src='/images/product_6.jpg'
							alt=''
						/>
						<div>
							<p className='text-sm capitalize'>
								Qasa 30 watts 120/180V mono solar panel
							</p>
							<h3 className='font-semibold font-gray-800'>N23, 000</h3>
							<button className='bg-blue-500 text-white text-center block w-full rounded active:scale-95 px-4 py-2 pointer-events-auto z-50'>
								Add to cart
							</button>
						</div>
					</div>
					<div className='carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none'>
						<Image
							height={400}
							width={400}
							className='object-cover aspect-video block align-middle m-auto rounded-sm'
							src='/images/product_5.jpg'
							alt=''
						/>
						<div>
							<p className='text-sm capitalize'>
								BUC solar panel mono crystalline solar module 300W - 2 units
							</p>
							<h3 className='font-semibold font-gray-800'>N270, 000</h3>
							<button className='bg-blue-500 text-white text-center block w-full rounded active:scale-95 px-4 py-2 pointer-events-auto z-50'>
								Add to cart
							</button>
						</div>
					</div>
				</div>
				<span
					className='absolute w-8 h-8 rounded-full bg-[#ffffffaa] active:bg-white shadow-2xl top-1/2 -translate-x-1/2 flex justify-center items-center right-4'
					id='right'>
					<FaAngleRight />
				</span>
				<span
					className='absolute w-8 h-8 rounded-full bg-[#ffffffaa] active:bg-white shadow-2xl top-1/2 -translate-x-1/2 flex justify-center items-center left-4'
					id='left'>
					<FaAngleLeft />
				</span>
				<Link
					className='block w-fit ml-auto mr-0 text-right text-blue-500 flex justify-end items-center font-semibold'
					href='/'>
					View more <FaAngleRight />
				</Link>
			</div>
			{/* Carousel */}

			{/* Services */}
			<div
				id='services'
				className='py-10'>
				<h2 className='mb-6 font-bold text-2xl text-center text-white'>
					Our Services
				</h2>
				<div className='flex flex-wrap p-4 gap-x-6 gap-y-8 m-auto justify-center'>
					<div className='bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
						<Image
							height={400}
							width={400}
							className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
							src='/images/residual_solar_panel_mounting.jpg'
						/>
						<div>
							<h3 className='font-semibold'>Residual Solar Panels</h3>
							<p>
								We specialize in customizing solar solutions for homes,
								providing cost effective and eco-friendly energy options for
								families.
							</p>
						</div>
					</div>
					<div className='bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
						<Image
							height={400}
							width={400}
							className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
							src='/images/commercial_solar_panels.jpg'
						/>
						<div>
							<h3 className='font-semibold'>Commercial Solar Panels</h3>
							<p>
								Businesses can benefit from solar power too! Discover how we can
								help you reduce operational costs and enhance sustainability.
							</p>
						</div>
					</div>
					<div className='bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
						<Image
							height={400}
							width={400}
							className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
							src='/images/mounting_and_maintenance.jpg'
						/>
						<div>
							<h3 className='font-semibold'>Installation and Maintenance</h3>
							<p>
								Our expert team ensures seamless installation and offers regular
								maintenance to keep your solar system performing at its best.
							</p>
						</div>
					</div>
					<div className='bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
						<Image
							height={400}
							width={400}
							className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
							src='/images/real_estate.jpg'
						/>
						<div>
							<h3 className='font-semibold'>Real Estate</h3>
							<p>
								We can help you find your dream house. Our real estate agents
								are experts in providing real estate solutions for our customers
							</p>
						</div>
					</div>
					<div className='bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
						<Image
							height={400}
							width={400}
							className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
							src='/images/phones.jpg'
						/>
						<div>
							<h3 className='font-semibold'>Phones and Mobile Accessories</h3>
							<p>
								We also offer quality mobile phones and other mobile accessories
								for sale at discounted rates.
							</p>
						</div>
					</div>
					<div className='bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
						<Image
							height={400}
							width={400}
							className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
							src='/images/laptops.jpg'
						/>
						<div>
							<h3 className='font-semibold'>Quality Laptops</h3>
							<p>
								Check out our listings to find quality laptops that suite your
								work requirements at affordable rates.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Services */}

			{/* Why choose us? */}
			<div className='py-10'>
				<h2 className='mb-6 font-bold text-2xl text-center'>Why Choose us?</h2>
				<div className='flex flex-wrap p-4 gap-x-6 gap-y-8 m-auto justify-center'>
					<div className='bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
						<Image
							height={400}
							width={400}
							className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
							src='/images/experienced.avif'
						/>
						<div>
							<h3 className='font-semibold'>Experience</h3>
							<p>
								We have years of experience in the solar industry ensuring
								top-notch service and reliable products.
							</p>
						</div>
					</div>
					<div className='bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
						<Image
							height={400}
							width={400}
							className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
							src='/images/quality.avif'
						/>
						<div>
							<h3 className='font-semibold'>Quality Products</h3>
							<p>
								We partner with leading manufacturers to provide you with the
								best panels and components
							</p>
						</div>
					</div>
					<div className='bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
						<Image
							height={400}
							width={400}
							className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
							src='/images/customer_support.avif'
						/>
						<div>
							<h3 className='font-semibold'>Customer Support</h3>
							<p>
								Our dedicated support team is here to assist you every step of
								the way, from the initial consultations to post-installation
								support.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Why choose us? */}
		</main>
	);
}
