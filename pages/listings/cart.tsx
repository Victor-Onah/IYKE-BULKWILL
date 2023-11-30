import React, { FormEventHandler, MouseEventHandler, useContext, useEffect, useState } from 'react'
import ListingsLayout, { ShopContext } from '../../components/listings_layout'
import Head from 'next/head';
import Link from 'next/link';
import { FaTrash, FaX } from 'react-icons/fa6';
import { cartItem } from '../../components/types';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps = function () {
	return {
		props: {
			appAuthToken: '$2b$10$DwcQnmA7g6FbBTzDnL9IfOQqafDd7Ka7SIDuAzbMMUskoGCO0206G'
		}
	}
} satisfies GetStaticProps<{ appAuthToken: string }>

export default function Cart({ appAuthToken }: InferGetStaticPropsType<typeof getStaticProps>) {

	let { state, dispatch } = useContext(ShopContext)

	let [checkout, setCheckout] = useState(false)

	useEffect(() => {
		let savedCart: cartItem[] | undefined = JSON.parse(localStorage.getItem('cart') as string)
		if (savedCart) {
			dispatch({ type: 'add_to_cart_bulk', payload: savedCart })
		}
	}, [])

	function removeItemFromCart({ currentTarget }: Event): void {
		let { id } = currentTarget?.dataset
		dispatch({ type: 'remove_from_cart', payload: id })
	}

	function increaseQuantity({ currentTarget }: Event): void {
		let { id } = currentTarget?.dataset
		dispatch({ type: 'increase_quantity_by_1', payload: id })
	}

	function decreaseQuantity({ currentTarget }: Event): void {
		let { id } = currentTarget?.dataset
		dispatch({ type: 'decrease_quantity_by_1', payload: id })
	}

	async function placeOrder(e: Event): Promise<void> {
		e.preventDefault()
		let inputs = document.querySelectorAll('.form-input') as NodeListOf<HTMLInputElement>,
			form = {
				customerContact: [] as unknown as [name: string, email: string, phoneNumber: string],
				products: [] as cartItem[],
				dateCreated: new Date().getTime(),
				totalItems: 0,
				totalUniqueItems: state.cart.length
			}, submitBtn = document.querySelector('#submit-btn') as HTMLButtonElement
		submitBtn.setAttribute('disabled', 'true')
		submitBtn.textContent = 'Please wait...'
		for (let input of inputs) {
			switch (input.name) {
				case 'name':
					if (!input.value.match(/^[a-zA-Z'_-]{4,}/)) return alert('Please make sure to enter a valid name.');
					else form['customerContact'][0] = input.value.trim()
					break;
				case 'email':
					if (!input.value.match(/^[a-z0-9.]{4,}@[a-z0-9.]{3,}.[a-z]{2,}/)) return alert('Please make sure to enter a valid email.');
					else form['customerContact'][1] = input.value.trim()
					break;
				case 'phone-number':
					if (!input.value.match(/^(0|\+234)[0-9]{10}/)) return alert('Please make sure to enter a valid phone number.');
					else form['customerContact'][2] = input.value.trim()
					break;
			}
		}
		for (let item of state.cart) form.totalItems += item.quantity
		try {
			let response = await fetch('/api/order', {
				method: 'POST',
				headers: {
					'X-Application-Authorization-Token': appAuthToken,
					'Content-Type': 'application/json'
				}, body: JSON.stringify(form)
			}), data = await response.json() as unknown as { success: boolean }
			if (!data.success) return alert('Unable to complete request at this time. Please try again later.')
			else alert('Your order was placed successfully, and you will be contacted via the media handles you provided.')
			dispatch({ type: 'clear_cart' })
			setCheckout(false)
		} catch (error) {
			console.error(error)
			alert('Unable to complete request at this time. Please try again later.')
			submitBtn.removeAttribute('disabled')
		}
	}
	return <div className=''>
		{
			state.cart.length === 0 ? "" : <h1 className='text-center font-semibold text-2xl my-4 text-gray-600'>Cart</h1>
		}
		<div>
			{
				state.cart.length === 0 ? <div>
					<h3 className='text-center font-semibold text-lg text-gray-600 mt-2'>No items in cart</h3>
					<Link className='text-blue-500 text-center w-fit block my-2 mx-auto' href='/listings'>Go to Listings</Link>
				</div> : state.cart.map(product => <div className='flex gap-2 mb-4 hover:shadow-lg items-start rounded-lg p-2' key={product._id}>
					<img className='max-w-[100px] object-cover flex justify-center items-center aspect-square rounded' src={product.imageUrl} height={100} width={100} alt={product.name} />
					<div className='flex-grow'>
						<p className='font-semibold capitalize'>{product.name}</p>
						<div className='flex gap-1 my-2 w-full max-w-[300px]'>
							<button onClick={increaseQuantity as unknown as React.MouseEventHandler} data-id={product._id} className='bg-green-500 py-1 px-2 font-bold flex justify-center items-center hover:scale-105 active:scale-95 rounded'>+</button>
							<input data-id={product._id} onChange={(e) => {
								dispatch({ type: 'set_product_quantity', payload: { id: e.target.dataset.id, quantity: e.target.value == 'NaN' ? 1 : Number(e.target.value) } })
							}} className='w-[70%] hover:outline-none border-black border-2 rounded px-2 py-1' value={product.quantity} type="text" />
							<button onClick={decreaseQuantity as unknown as React.MouseEventHandler} data-id={product._id} className='bg-yellow-500 py-1 px-2 font-bold flex justify-center items-center hover:scale-105 active:scale-95 rounded'>-</button>
						</div>
						<div>
							<button
								onClick={removeItemFromCart as unknown as React.MouseEventHandler}
								data-id={product._id}
								className='bg-red-500 text-white py-1 px-2 text-sm font-semibold flex gap-1 items-center justify-center rounded-sm w-fit mr-0 ml-auto hover:scale-105 active:scale-95'><FaTrash /> Remove</button>
						</div>
					</div>
				</div>)
			}
		</div>
		{state.cart.length > 0 ? <div>
			<button onClick={() => setCheckout(true)} className='bg-blue-500 text-white px-4 py-2 rounded-md w-full max-w-[400px] m-auto block mb-4 hover:scale-105 active:scale-95'>Place order</button>
			<button
				onClick={() => {
					if (confirm('You\'re about to clear your cart. Do you wish to continue?')) {
						dispatch({ type: 'clear_cart' })
						localStorage.removeItem('cart')
					}
				}}
				className='bg-red-100 text-red-500 px-4 py-2 rounded-md w-full max-w-[400px] m-auto block mb-4 hover:scale-105 active:scale-95'>Clear cart</button>
		</div> : ''}
		{
			checkout && <div className='fixed top-0 left-0 w-full p-4 bottom-0 z-[100] flex justify-center items-center' style={{
				backdropFilter: 'blur(10px)'
			}}>
				<div className='p-4 rounded h-fit bg-white w-full max-w-[600px] relative shadow-lg'><h2 className="text-center text-lg text-gray-600 text-bold">Complete Order</h2>
					<button onClick={() => setCheckout(false)} className='text-sm bg-slate-100 absolute flex justify-center items-center w-8 h-8 rounded-full top-2 right-2 hover:bg-slate-300 active:scale-95'><FaX /></button>
					<form onSubmit={placeOrder as unknown as FormEventHandler<HTMLFormElement>} className='w-full my-8 flex flex-col gap-2 max-w-[400px] mx-auto'>
						<input className='form-input border-2 border-black rounded px-4 py-2' name='name' placeholder='Name' type="text" />
						<input className='form-input border-2 border-black rounded px-4 py-2' name='email' type="email" placeholder='Email' />
						<input className='form-input border-2 border-black rounded px-4 py-2' name='phone-number' placeholder='Phone number' type="tel" />
						<button id='submit-btn' className='bg-blue-500 text-white px-4 py-2 rounded-md w-full max-w-[400px] m-auto block mb-4 hover:scale-105 active:scale-95 disabled:opacity-75'>Complete your order</button>
					</form>
				</div>
			</div>
		}
	</div>
}

Cart.getLayout = function (page: React.ReactNode) {
	return (
		<>
			<Head>
				<meta name='robots' content='no index, no follow' />
				<title>Cart</title>
			</Head>
			<ListingsLayout>
				{page}
			</ListingsLayout>
		</>
	);
};