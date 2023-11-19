import Head from 'next/head';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import ListingsLayout, { ShopContext } from '../../components/listings_layout';
import { FaCartPlus, FaSpinner } from 'react-icons/fa6';
import Link from 'next/link';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

type product = {
	_id: string;
	name: string;
	description: string;
	imageUrl: string;
	price: number;
	quantity: number;
	category: string;
	inStock: boolean;
	quantityPurchased: number;
	dateUploaded: Date | number | string;
};

export const getStaticProps = (() => {
	return {
		props: {
			appAuthToken:
				'$2b$10$DwcQnmA7g6FbBTzDnL9IfOQqafDd7Ka7SIDuAzbMMUskoGCO0206G',
		},
	};
}) satisfies GetStaticProps<{ appAuthToken: string }>;

export default function Search({
	appAuthToken,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	let { state, dispatch } = useContext(ShopContext);
	let router = useRouter();
	let { query } = router;
	let [searchResults, setSearchResults] = useState([]) as never as [
		product[],
		(arr: product[]) => void
	];
	let [gettingSearchResults, setGettingSearchResults] = useState(true);
	let [searchStatus, setSearchStatus] = useState('pending') as [
		'pending' | 'successful' | 'failed',
		(s: typeof searchStatus) => void
	];
	/**
	 * Add items to cart
	 */
	function addToCart({ currentTarget }) {
		let { id } = currentTarget.dataset;
		let product = state.products.find((p) => p._id === id);
		dispatch({ type: 'add_to_cart', payload: product });
	}
	useEffect(() => {
		setGettingSearchResults(true);
		setSearchStatus('pending');
		fetch(`/api/search?q=${query.q}&page=1`, {
			headers: {
				'X-Application-Authorization-Token': appAuthToken,
			},
		})
			.then((response) => response.json())
			.then((response) => {
				setSearchResults(response);
				setSearchStatus('successful');
				setGettingSearchResults(false);
			})
			.catch((err) => {
				console.log(err);
				setSearchStatus('failed');
				setGettingSearchResults(false);
			});
	}, [query]);
	return (
		<div>
			<div className='mb-6'></div>
			<div
				className={`${
					searchStatus === 'successful' && 'grid'
				} grid-cols-4 gap-y-2 gap-x-4 max-[750px]:grid-cols-3 max-[500px]:grid-cols-2 max-[250px]:grid-cols-1`}>
				{gettingSearchResults ? (
					<p className='font-semibold text-slate-300 text-center'>Loading...</p>
				) : searchStatus === 'failed' ? (
					<p className='font-semibold text-slate-300 text-center'>
						Failed to load products
					</p>
				) : (
					searchResults.map((product: product) => (
						<div
							key={product._id}
							data-id={product._id}
							className='hover:shadow-lg p-2 h-fit'>
							<img
								alt={product.name}
								src={product.imageUrl}
								height={150}
								width={150}
								loading='lazy'
								className='block aspect-square align-center object-cover w-full'
							/>
							<small className='font-semibold'>{product.name}</small>
							<p className='font-bold'>N{product.price}</p>
							<div className='flex gap-1 flex-col'>
								<button
									onClick={addToCart}
									data-id={product._id}
									className='flex-grow flex items-center justify-center gap-1 text-sm px-2 py-1 rounded bg-blue-500 w-full text-white font-semibold active:scale-95'>
									<FaCartPlus /> Add to cart
								</button>
								<Link
									className='text-[12px] bg-slate-200 rounded px-2 py-1 text-center'
									href={`/listings/${product._id}`}>
									View product
								</Link>
							</div>
						</div>
					))
				)}
			</div>
			{state.fetchingMoreProducts[2] || (
				<FaSpinner className='m-auto text-zinc-600' />
			)}
		</div>
	);
}

Search.getLayout = (page: ReactNode) => {
	return (
		<>
			<Head>
				<title>Product Listings | IYKE-BULKWILL</title>
				<meta
					name='description'
					content='Check out our listings to see our exclusive offers'
				/>
				<meta
					name='og:title'
					content='IYKE_BULKWILL - Product Listings'
				/>
				<meta
					name='og:description'
					content='Check out our listings to see our exclusive offers'
				/>
				<meta
					name='og:image'
					content='https://iyke-bulkwill.com/images/og_image.png'
				/>
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content='Product Listings | IYKE-BULKWILL'
				/>
				<meta
					name='twitter:description'
					content='Check out our listings to see our exclusive offers'
				/>
				<meta
					name='twitter:image'
					content='https://iyke-bulkwill.com/images/og_image.png'
				/>
			</Head>
			<ListingsLayout>{page}</ListingsLayout>
		</>
	);
};
