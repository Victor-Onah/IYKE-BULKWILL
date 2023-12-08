import React, { useContext, useEffect } from 'react'
import { ShopContext } from './listings_layout'
import { FaCartPlus } from 'react-icons/fa6'
import Link from 'next/link'
import { cartItem } from './types'

export default function CartIcon() {
	let { state, dispatch } = useContext(ShopContext)
	useEffect(() => {
		let savedCart: cartItem[] | undefined = JSON.parse(localStorage.getItem('cart') as string)
		if (savedCart) {
			dispatch({ type: 'add_to_cart_bulk', payload: savedCart })
		}
	}, [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(state.cart))
	}, [state.cart])
	return state.cart.length > 0 ? <Link
		href='/listings/cart' className='fixed top-1/2 hover:scale-105 right-4 bg-blue-700 text-white w-14 h-14 flex justify-center items-center rounded-full shadow-lg gap-1'>
		<FaCartPlus /> {state.cart.length}
	</Link> : ''
}