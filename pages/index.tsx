import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaAngleLeft, FaAngleRight, FaPhone, FaWhatsapp } from 'react-icons/fa6';
import React from 'react';
import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { product } from '../components/types';
import nodeFetch from 'node-fetch'
import dotenv from 'dotenv'

export const getServerSideProps = async function ({ req }) {
	try {
		dotenv.config()
		let response = await nodeFetch(process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/listings' : process.env.NODE_ENV === 'production' ? 'https://iyke-bulkwill.com/api/listings' : 'https://iyke-bulkwill.onrender.com/api/listings', {
			headers: {
				'X-Application-Authorization-Token': '$2b$10$DwcQnmA7g6FbBTzDnL9IfOQqafDd7Ka7SIDuAzbMMUskoGCO0206G'
			}
		});
		let data: product[] = await response.json();
		return {
			props: {
				listingsPreview: data.slice(0, 6),
			},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				listingsPreview: [],
			},
		};
	}
} satisfies GetServerSideProps<{ listingsPreview: product[] }>;

export default function Home({
	listingsPreview,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	useEffect(() => {
		/**
		 * My custom carousel implementation. It's basic and maybe strange, but it works.
		 * I had to write the the functionality myself because of some issues I encountered
		 * using third party libraries.
		 */

		let carousel = document.getElementById('carousel-slider') as HTMLDivElement,
			nextBtn = document.getElementById('right') as HTMLSpanElement,
			prevBtn = document.getElementById('left') as HTMLSpanElement,
			items = carousel.childNodes.length,
			scrollWidth = carousel.scrollWidth,
			widthPerItem = scrollWidth / items,
			activeIndex = 1,
			end = 0,
			start = 0,
			currentScrollPosition = 0;

		carousel.addEventListener('mousedown', grabCarousel);
		carousel.addEventListener('mouseup', clearEvents);
		carousel.addEventListener('touchstart', touchGrabCarousel);
		carousel.addEventListener('touchend', clearTouchEvents);
		carousel.addEventListener('touchcancel', resumeAutoPlay);
		carousel.addEventListener('mouseenter', pauseAutoPlay);
		carousel.addEventListener('mouseleave', resumeAutoPlay);
		nextBtn.addEventListener('click', showNextSlide);
		prevBtn.addEventListener('click', showPrevSlide);

		let autoplay: string | number | NodeJS.Timeout = setInterval(function () {
			if (activeIndex >= 1 && activeIndex < items) showNextSlide();
			else {
				activeIndex = 1;
				showPrevSlide();
			}
		}, 4000);
		/**
		 * Pause auto play on `mouseover` or `touchmove`
		 */
		function pauseAutoPlay(): void {
			clearInterval(autoplay);
		}
		/**
		 * Resume autoplay on `mouseleave`, `touchend` or `touchcancel`
		 */
		function resumeAutoPlay(): void {
			autoplay = setInterval(function () {
				if (activeIndex >= 1 && activeIndex < items) showNextSlide();
				else {
					activeIndex = 1;
					showPrevSlide();
				}
			}, 4000);
		}
		/**
		 * Show next section of the slider
		 */
		function showNextSlide(): void {
			activeIndex++;
			updateCarousel();
		}
		/**
		 * Show the previous section of the slider
		 */
		function showPrevSlide(): void {
			activeIndex--;
			updateCarousel();
		}
		/**
		 * Grab the carousel and slide it as the user's finger moves over it. Only works on mobile devices.
		 */
		function touchGrabCarousel(e: TouchEvent) {
			pauseAutoPlay();
			start = e.touches[0].clientX;
			currentScrollPosition = carousel.scrollLeft;
			carousel.style.cursor = 'grabbing';
			carousel.addEventListener('touchmove', touchMoveCarousel);
			carousel.addEventListener('touchend', clearTouchEvents);
		}
		/**
		 * Move the carousel along with the user's finger as they slide across it
		 */
		function touchMoveCarousel(e: TouchEvent) {
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
		/**
		 * Resumes autoplay and removes the `touchmove` event handler.
		 */
		function clearTouchEvents(e: TouchEvent) {
			resumeAutoPlay();
			if (start - end > 100) activeIndex++;
			if (end - start > 100) activeIndex--;
			carousel.removeEventListener('touchmove', touchMoveCarousel);
			updateCarousel();
		}
		/**
		 * Update the carousel to the correct position as the user scrolls or grabs it.
		 * It also updates the carousel if the user decides to use the navigation buttons.
		 */
		function updateCarousel(): void {
			if (activeIndex <= 1) activeIndex = 1;
			if (activeIndex >= items) activeIndex = items;
			carousel.scrollLeft = widthPerItem * (activeIndex - 1);
		}
		/**
		 * Grabs the carousel on `mousedown`
		 */
		function grabCarousel(e: MouseEvent): void {
			start = e.pageX;
			currentScrollPosition = carousel.scrollLeft;
			carousel.style.cursor = 'grabbing';
			carousel.addEventListener('mousemove', moveCarousel);
		}
		/**
		 * Only runs on desktop devices or devices controlled with a mouse.
		 * It does the same thing as the `clearTouchEvents` by removing the `mousemove` event.
		 */
		function clearEvents(e: MouseEvent) {
			carousel.style.cursor = 'grab';
			end = e.pageX;
			if (start - end > 100) activeIndex++;
			if (end - start > 100) activeIndex--;
			carousel.removeEventListener('mousemove', moveCarousel);
			updateCarousel();
		}
		/**
		 * Only runs on desktop and mouse controlled devices.
		 * Moves the carousel while it is being grabbed.
		 */
		function moveCarousel(e: MouseEvent): void {
			if (start > e.pageX) {
				carousel.scrollLeft = currentScrollPosition + (start - e.pageX);
			} else {
				carousel.scrollLeft = currentScrollPosition - (e.pageX - start);
			}
		}
		return () => {
			/**
			 * Clean the events call stack
			 */
			carousel.removeEventListener('mouseup', clearEvents);
			carousel.removeEventListener('mousedown', grabCarousel);
			carousel.removeEventListener('touchstart', touchGrabCarousel);
			carousel.removeEventListener('touchend', clearTouchEvents,);
			carousel.removeEventListener('mouseenter', pauseAutoPlay);
			carousel.removeEventListener('mouseleave', resumeAutoPlay);
			nextBtn.removeEventListener('click', showNextSlide);
			prevBtn.removeEventListener('click', showPrevSlide);
			carousel.removeEventListener('touchcancel', resumeAutoPlay);
		};
	}, []);
	return (
		<>
			<Head>
				<title>
					Welcome to Iyke BulkWill Int'l Ltd. - Your Source for Sustainable Living.
				</title>
				<link rel="canonical" href="https://iyke-bulkwill.onrender.com/" />
				<link rel="canonical" href="https://www.iyke-bulkwill.com/" />
			</Head>
			<main id='home'>
				{/* Legend */}
				<div
					className=' flex pt-[90px] pb-[50px] px-4 flex-col justify-center gap-4 text-center text-blue-900'
					id='legend'>
					<h1
						style={{ fontFamily: 'Playfair Display' }}
						className='text-6xl font-bold capitalize max-md:text-4xl flex justify-center flex-wrap gap-2'>
						<Image
							alt='Logo'
							src='/images/logo.png'
							height={70}
							width={70}
						/>{' '}
						Iyke-Bulkwill Intl. Ltd.
					</h1>
					<div>
						<h2 className='text-lg font-semibold'>We Deal On</h2>
						<p className='flex justify-center'>
							Solar and CCTV | Installations | Real Estate Agent | Sales of
							Phones and Laptops | General Merchants
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
								href='https://wa.me/2348038022220'>
								<FaWhatsapp /> 0803 802 2220
							</a>
						</p>
					</div>
					<Link
						className='block w-fit mx-auto px-4 py-2 rounded hover:shadow-lg active:scale-95 text-white bg-blue-700'
						href='/listings'>
						Check out our listings
					</Link>
				</div>
				{/* Legend */}

				{/* Carousel */}
				<div className='p-4 relative max-w-6xl m-auto'>
					<h3 className='text-lg text-slate-600 font-bold my-8'>
						Take a sneak peek at some of our exclusive offers
					</h3>
					<div
						id='carousel-slider'
						className='flex gap-4 overflow-hidden cursor-grab py-2 relative'>
						{listingsPreview.map((product) => {
							return (
								<div
									key={product._id}
									className='carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none'>
									<Image
										height={400}
										width={400}
										className='object-cover aspect-video block align-middle m-auto rounded-sm'
										src={product.imageUrl}
										alt={product.name}
									/>
									<p className='text-sm font-semibold capitalize'>{product.name}</p>
								</div>
							);
						})}
					</div>
					<span
						className='absolute w-16 h-16 rounded-full bg-white active:scale-95 shadow-2xl top-1/2 -translate-y-1/2 flex justify-center items-center right-4'
						id='right'>
						<FaAngleRight />
					</span>
					<span
						className='absolute w-16 h-16 rounded-full bg-white active:scale-95 shadow-2xl top-1/2 -translate-y-1/2 flex justify-center items-center left-4'
						id='left'>
						<FaAngleLeft />
					</span>
					<Link
						className='w-fit ml-auto mt-4 mr-0 text-right text-blue-700 flex justify-end items-center font-semibold'
						href='/listings'>
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
								alt='People mounting solar panels on a house'
							/>
							<div>
								<h3 className='font-semibold'>Solar Panels</h3>
								<p>
									We specialize in customizing solar solutions for homes,
									providing cost effective and eco-friendly energy options for
									families. Businesses can also benefit from solar power too! <Link className='text-blue-700' href='/listings'>Discover</Link> how we
									can help you reduce operational costs and enhance
									sustainability through our commercial solar panels.
								</p>
							</div>
						</div>
						<div className='bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
							<Image
								height={400}
								width={400}
								className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
								src='/images/mounting_and_maintenance.jpg'
								alt='A house fiited wih solar panels'
							/>
							<div>
								<h3 className='font-semibold'>Installation and Maintenance</h3>
								<p>
									Our expert team ensures seamless installation and offers
									regular maintenance to keep your solar system performing at
									its best.
								</p>
							</div>
						</div>
						<div className='bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
							<Image
								height={400}
								width={400}
								className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
								src='/images/real_estate.jpg'
								alt='Many houses in an estate'
							/>
							<div>
								<h3 className='font-semibold'>Real Estate</h3>
								<p>
									We can help you find your dream house. Our real estate agents
									are experts in providing real estate solutions for our
									customers. You can <Link className='text-blue-700' href='/contact'>contact us</Link> directly for further enquiry
								</p>
							</div>
						</div>
						<div className='bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
							<Image
								height={400}
								width={400}
								className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
								src='/images/phones.jpg'
								alt='Phones on display'
							/>
							<div>
								<h3 className='font-semibold'>Phones and Mobile Accessories</h3>
								<p>
									We also offer quality mobile phones and other mobile
									accessories for sale at discounted rates.
								</p>
							</div>
						</div>
						<div className='bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
							<Image
								height={400}
								width={400}
								className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
								src='/images/laptops.jpg'
								alt='Laptops on display'
							/>
							<div>
								<h3 className='font-semibold'>Quality Laptops</h3>
								<p>
									Check out our <Link className='text-blue-700' href='/listings'>listings page</Link> to find quality laptops that suite your
									work requirements at affordable rates.
								</p>
							</div>
						</div>
						<div className='bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
							<Image
								height={400}
								width={400}
								className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
								src='https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/Z/200674_1664086461.jpg'
								alt='Beautiful chandelier'
							/>
							<div>
								<h3 className='font-semibold'>Home Lights</h3>
								<p>
									We offer top-notch lighting for home interior decorations. You can visit our <Link className='text-blue-700' href='/listings'>listings page</Link> to see the ones that suit your taste.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* Services */}

				{/* Why choose us? */}
				<div className='py-10'>
					<h2 className='mb-6 font-bold text-2xl text-center'>
						Why Choose us?
					</h2>
					<div className='flex flex-wrap p-4 gap-x-6 gap-y-8 m-auto justify-center'>
						<div className='bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4'>
							<Image
								height={400}
								width={400}
								className='w-full rounded-md aspect-video object-cover block align-middle m-auto'
								src='/images/experienced.avif'
								alt='A man wearing a helmet and showing a thumbs up'
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
								alt='A stamp showing quality'
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
								alt='Customer care officer smiling'
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
		</>
	);
}
