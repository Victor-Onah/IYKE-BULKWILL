import React, { InputHTMLAttributes, MouseEventHandler, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { ShopContext } from './listings_layout';

export default function ListingsSideNav() {
	let { state, dispatch } = useContext(ShopContext)

	function changeCategory(e: MouseEvent) {
		let { category } = e.target.dataset, categoryBtns = document.querySelectorAll('.category-btn')
		dispatch({ type: 'set_current_category', payload: category })
		categoryBtns.forEach((btn) => btn.classList.remove('bg-blue-700', 'text-white'))
		e.target.classList.add('bg-blue-700', 'text-white')
	}
	return (
		<aside className='lg:sticky top-[77px] lg:float-left left-4 h-fit bottom-4 shadow-lg p-4 overflow-auto lg:w-[350px] bg-white'>
			<div></div>
			<section className='mt-8'>
				<h2 className='font-bold text-lg text-slate-700'>Categories</h2>
				<ul className='mt-2 flex flex-wrap lg:flex-col justify-start items-start gap-2 overflow-auto'>
					<button onClick={changeCategory as unknown as MouseEventHandler} data-category='all' className='px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold bg-blue-700 text-white rounded-full border-2 border-blue-700 category-btn'>
						All
					</button>
					<button onClick={changeCategory as unknown as MouseEventHandler} data-category='solar panels' className='px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn'>
						Solar Panels
					</button>
					<button onClick={changeCategory as unknown as MouseEventHandler} data-category='cctvs' className='px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn'>
						CCTVs
					</button>
					<button onClick={changeCategory as unknown as MouseEventHandler} data-category='security lights' className='px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn'>
						Security Lights
					</button>
					<button onClick={changeCategory as unknown as MouseEventHandler} data-category='phones' className='px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn'>
						Phones
					</button>
					<button onClick={changeCategory as unknown as MouseEventHandler} data-category='laptops' className='px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn'>
						Laptops
					</button>
					<button onClick={changeCategory as unknown as MouseEventHandler} data-category='home lights' className='px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn'>
						Home Lights
					</button>
				</ul>
			</section>
		</aside>
	);
}
