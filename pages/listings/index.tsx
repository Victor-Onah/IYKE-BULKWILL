import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import ListingsLayout from '../../components/listings_layout';
import { ShopContext } from '../../components/listings_layout';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { FaCartPlus, FaSpinner } from 'react-icons/fa6';
import Link from 'next/link';
import CartIcon from '../../components/cart_icon';
import { product } from '../../components/types';

export const getStaticProps = (() => {
	return {
		props: {
			appAuthToken:
				'$2b$10$DwcQnmA7g6FbBTzDnL9IfOQqafDd7Ka7SIDuAzbMMUskoGCO0206G',
		},
	};
}) satisfies GetStaticProps<{ appAuthToken: string }>;

export default function Listings({
	appAuthToken,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	let { state, dispatch } = useContext(ShopContext);

	/** Adds an item to the cart */
	function addToCart({ currentTarget }) {
		let { id } = currentTarget.dataset;
		let product = state.products.find((p) => p._id === id);
		dispatch({ type: 'add_to_cart', payload: { ...product, quantity: 1 } });
	}

	useEffect(() => {
		let page = 1
		/**
		 * Gets the initial products for the shop
		 */
		async function getInitialProducts(): Promise<void> {
			try {
				let response = await fetch(`/api/listings?page=1&category=${state.currentCategory}`, {
					headers: {
						'X-Application-Authorization-Token': appAuthToken,
					},
				});
				if (response.status === 401) {
					dispatch({ type: 'set_product_fetch_status', payload: 'failed' });
					return;
				} else if (response.status === 500) {
					dispatch({ type: 'set_product_fetch_status', payload: 'failed' });
					return;
				}
				let data: product[] = await response.json();
				dispatch({ type: 'set_products', payload: [...data] });
			} catch (error) {
				console.log(error);
				dispatch({ type: 'set_product_fetch_status', payload: 'failed' });
			}
		}

		/**
		 * Get more products listing
		 */
		async function getMoreProducts(category: typeof state.currentCategory): Promise<void> {
			if (
				state.fetchingMoreProducts[2] ||
				state.fetchingMoreProducts[1] === 'failed' ||
				state.fetchingMoreProducts[1] === 'success'
			) {
				try {
					page++
					dispatch({
						type: 'set_more_products',
						payload: {
							category: category,
							status: 'pending',
							finished: false,
						},
					});
					let response = await fetch(
						`/api/listings?page=${page}&category=${category}`,
						{
							headers: {
								'X-Application-Authorization-Token': appAuthToken,
							},
						}
					);
					if (response.status === 401) {
						dispatch({
							type: 'set_more_products',
							payload: {
								category: category,
								status: 'failed',
								finished: true,
							},
						});
						return;
					} else if (response.status === 500) {
						dispatch({
							type: 'set_more_products',
							payload: {
								category: category,
								status: 'failed',
								finished: true,
							},
						});
						return;
					}
					let data: product[] = await response.json();

					dispatch({
						type: 'set_more_products',
						payload: {
							category: category,
							status: 'success',
							data: [...data],
							finished: true,
						},
					});
				} catch (error) {
					console.error(error);
					dispatch({ type: 'set_product_fetch_status', payload: 'failed' });
				}
			}
		}

		function scroll(): void {
			let documentLength = document.documentElement.scrollHeight;
			if (documentLength - (window.scrollY + this.window.innerHeight) <= 300) {
				getMoreProducts(state.currentCategory);
				return void 0;
			}
		}
		window.addEventListener('scroll', scroll);
		getInitialProducts();

		return () => {
			window.removeEventListener('scroll', scroll);
			dispatch({ type: 'set_products', payload: [] })
			page = 1
		};
	}, [state.currentCategory])

	return (
		<div>
			<div className='mb-6'></div>
			<div
				className={`${state.productFetchStatus === 'success' && 'grid'
					} grid-cols-4 gap-y-2 gap-x-4 max-[750px]:grid-cols-3 max-[500px]:grid-cols-2 max-[250px]:grid-cols-1`}>
				{state.fetchingProducts ? (
					<p className='font-semibold text-slate-300 text-center'>Loading...</p>
				) : state.productFetchStatus === 'failed' ? (
					<p className='font-semibold text-slate-300 text-center'>
						Failed to load products
					</p>
				) : (
					state.products.map((product: product) => (
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
							<p className='font-semibold text-sm capitalize'>{product.name}</p>
							<div className='flex gap-1 flex-col'>
								<button
									onClick={addToCart}
									data-id={product._id}
									className='flex-grow flex items-center justify-center gap-1 text-sm px-2 py-1 rounded bg-blue-500 w-full text-white font-semibold active:scale-95'>
									<FaCartPlus /> Add to cart
								</button>
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

Listings.getLayout = function (page: React.ReactNode) {
	return (
		<>
			<Head>
				<title>
					Exclusive Offers and Affordable Prices | Products Listings - Iyke
					Bulkwill
				</title>
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
			<ListingsLayout>
				{page}
				<CartIcon />
			</ListingsLayout>
		</>
	);
};
