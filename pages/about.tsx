import { FaPhone, FaWhatsapp } from 'react-icons/fa6';
import React from 'react';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>
					About Us - Iyke BulkWill: Pioneers in Green Technology
				</title>
				<meta
					name='description'
					content="Learn about our commitment to providing innovative solar solutions, cutting-edge electronics, and sustainable real estate options. Discover the Iyke BulkWill difference."
				/>
				<meta
					name='og:title'
					content="About Us - Iyke BulkWill: Pioneers in Green Technology"
				/>
				<meta
					name='og:description'
					content="Learn about our commitment to providing innovative solar solutions, cutting-edge electronics, and sustainable real estate options. Discover the Iyke BulkWill difference."
				/>
				<meta
					name='og:image'
					content='https://iyke-bulkwill.onrender.com/images/og_image.jpg'
				/>
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content='About Us - Iyke BulkWill: Pioneers in Green Technology'
				/>
				<meta
					name='twitter:description'
					content="Learn about our commitment to providing innovative solar solutions, cutting-edge electronics, and sustainable real estate options. Discover the Iyke BulkWill difference."
				/>
				<link rel="canonical" href="https://iyke-bulkwill.onrender.com/about" />
				<link rel="canonical" href="https://www.iyke-bulkwill.com/about" />
			</Head>
			<main id='about'>
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
						Iyke-Bulkwill Intl. Ltd.
					</h1>
					<img className='w-full max-w-xs aspect-square rounded-full block my-2 mx-auto shadow-xl hover:scale-105' src="/images/iyke-bulkwill.jpg" alt="CEO Iyke Bulkwill" />
					<div>
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
				</div>
				{/* Legend */}

				{/* About us */}
				<div
					className='py-10 max-w-4xl m-auto'>
					<h2 className='mb-6 font-bold text-2xl text-center'>
						About Us
					</h2>
					<div className='flex flex-wrap p-4 gap-x-6 gap-y-8 m-auto justify-center'>
						<p>
							At Iyke-Bulkwill Intl. Ltd., we are committed to shaping a brighter, greener future by offering an extensive range of products that empower you to embrace sustainability and modern living. Our diverse portfolio includes top-notch solar panels, cutting-edge smartphones, sleek laptops, and exclusive deals on real estate and other merchandise. We believe in providing solutions that not only enhance your lifestyle but also contribute to a more sustainable and eco-friendly world.
						</p>
						<p>
							<b className='mb-2'>Our Commitment to Sustainability:</b><br />
							As advocates for a cleaner planet, we prioritize eco-friendly solutions. Our solar panels are designed to harness the power of the sun, allowing you to generate clean energy for your home or business. By choosing our solar panels, you're not just investing in technology; you're investing in a sustainable future. We are dedicated to reducing our carbon footprint and helping you do the same.
						</p>
						<p>
							<b className='mb-2'>Empowering Connectivity:</b><br />
							Stay connected with the latest in smart technology. Discover our range of smartphones and laptops, carefully curated to meet the demands of a fast-paced, digital lifestyle. From seamless communication to efficient productivity, our devices are your gateway to the future. Embrace innovation and elevate your daily experiences with the power of connectivity.
						</p>
						<p>
							<b className='mb-2'>Exclusive Real Estate Deals:</b><br />
							Looking to invest in your dream property? Explore our exclusive deals on real estate that cater to various preferences and lifestyles. Whether you're seeking a cozy home, a commercial space, or a piece of land to call your own, we have diverse options to suit your needs. Our team is dedicated to ensuring a smooth and rewarding real estate experience for every customer.
						</p>
						<p>
							<b className='mb-2'>Unbeatable Merchandise Offers:</b><br />
							In addition to our core products, we bring you irresistible deals on a wide range of merchandise. From home essentials to tech accessories, we source high-quality products to complement your lifestyle. Our commitment to excellence ensures that every item you purchase meets the highest standards of quality and functionality.
						</p>

						<h3 className='mb-6 font-bold text-xl text-center'>Why Choose Iyke-Bulkwill?</h3>

						<p className='w-full text-left'><b>Quality Assurance:</b><br /> Our products undergo rigorous quality checks to ensure durability and performance.</p>
						<p className='w-full text-left'><b>Sustainability:</b><br /> We are committed to a greener future, offering eco-friendly solutions to reduce environmental impact.</p>
						<p className='w-full text-left'><b>Innovation:</b><br /> Stay ahead with the latest in technology, from solar advancements to cutting-edge devices.</p>
						<p className='w-full text-left'><b>Customer-Centric Approach:</b><br /> Your satisfaction is our priority. Our dedicated support team is here to assist you at every step.</p>
						<p>
							At Iyke-Bulkwill Intl. Ltd., we believe in empowering individuals and communities through sustainable practices and smart technology. Join us on this journey towards a more connected, efficient, and environmentally conscious future. Explore our offerings and make a positive impact on your life and the world around you.
						</p>
					</div>
				</div>
				{/* About us */}
			</main>
		</>
	);
}
