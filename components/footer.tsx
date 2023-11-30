import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer
			className='bg-blue-500 text-white px-4
			py-8'
			style={{
				fontSize: '14px',
			}}>
			<h3
				style={{
					fontFamily: 'Playfair Display',
				}}
				className='text-lg font-bold mb-6 text-center'>
				Iyke-Bulkwill Int'l Ltd.&copy; {new Date().getFullYear()}
			</h3>
			<div className='mb-8'>
				<h3 className='font-semibold mb-4 text-center'>Dealers on</h3>
				<div className='flex justify-center max-w-lg text-center m-auto'>
					Solar panels | Installations | Real Estate | Sales of Phones and
					Laptops | General Merchants
				</div>
			</div>
			<hr className='max-w-4xl m-auto' />
			<div className='grid md:grid-cols-2 grid-cols-1 max-w-lg mx-auto my-6 gap-6'>
				<address>
					<h4 className='font-semibold'>Office Address 1</h4>
					<p>
						<i>
							No. 1 Pepple Street,
							<br />
							Ikeja,
							<br />
							Lagos State,
							<br />
							Nigeria.
						</i>
					</p>
				</address>
				<address>
					<h4 className='font-semibold'>Office Address 2</h4>
					<p>
						<i>
							No. 21 Market Road,
							<br />
							GSM Village Near Fire Service,
							<br />
							New Heaven,
							<br />
							Enugu State,
							<br />
							Nigeria
						</i>
					</p>
				</address>
			</div>
			<div className='flex justify-center max-w-lg text-center m-auto gap-4'>
				<Link
					href='/'
					className='font-semibold'>
					Home
				</Link>
				<Link
					href='/about'
					className='font-semibold'>
					About Us
				</Link>
				<Link
					href='/contact'
					className='font-semibold'>
					Contact Us
				</Link>
				<Link
					href='/listings'
					className='font-semibold'>
					Listings
				</Link>
			</div>
			<h3 className='text-sm text-center mt-4'>
				Iyke-Bulkwill Int'l Ltd.&copy; {new Date().getFullYear()}
			</h3>
		</footer>
	);
}
