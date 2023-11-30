import React, { PropsWithChildren, createContext, useReducer } from 'react';
import ListingsSideNav from './listings_side_nav';
import ListingsBanners from './listings_banners';
import SearchBar from './search_bar';
import { action, actionType, cartItem, state } from './types';

let initState: state = {
	fetchingProducts: true,
	productFetchStatus: 'pending',
	products: [],
	fetchingAutoComplete: false,
	autoCompleteFetchStatus: 'pending',
	autoComplete: [],
	fetchingSearchResults: false,
	searchResultsStatus: 'pending',
	searchResults: [],
	fetchingMoreProducts: [
		'all' /* Category*/,
		'pending' /* Fetch state */,
		true /* Finished? */,
	],
	moreProducts: [],
	currentCategory: 'all',
	cart: [],
};
function reducer(state: state, action: action): state {
	switch (action.type) {
		case 'set_autocomplete':
			return {
				...state,
				autoCompleteFetchStatus: 'success',
				autoComplete: action.payload,
				fetchingAutoComplete: false,
			};
		case 'set_current_category':
			return { ...state, currentCategory: action.payload };
		case 'set_autocomplete_fetch_status':
			return { ...state, autoCompleteFetchStatus: action.payload };
		case 'set_more_products':
			if (action.payload.status === 'failed') {
				return {
					...state,
					fetchingMoreProducts: [
						action.payload.category,
						action.payload.status,
						true,
					],
				};
			} else if (action.payload.status === 'pending') {
				return {
					...state,
					fetchingMoreProducts: [
						action.payload.category,
						action.payload.status,
						false,
					],
				};
			} else {
				return {
					...state,
					products: [...state.products, ...action.payload.data],
					fetchingMoreProducts: [
						action.payload.category,
						action.payload.status,
						action.payload.finished,
					],
				};
			}
		case 'set_product_fetch_status':
			return { ...state, productFetchStatus: action.payload };
		case 'set_products':
			return {
				...state,
				products: action.payload,
				productFetchStatus: 'success',
				fetchingProducts: false,
			};
		case 'set_search_results':
			return {
				...state,
				searchResults: action.payload,
				searchResultsStatus: 'success',
				fetchingSearchResults: false,
			};
		case 'set_search_results_fetch_status':
			return { ...state, searchResultsStatus: action.payload };
		case 'add_to_cart':
			let { payload } = action as unknown as { payload: cartItem, action: actionType }
			let productIndex = state.cart.findIndex(product => product._id === payload._id)
			if (productIndex === -1) return { ...state, cart: [...state.cart, payload] }
			state.cart[productIndex].quantity++
			let newCart = [...state.cart]
			return { ...state, cart: newCart };
		case 'add_to_cart_bulk':
			return { ...state, cart: [...action.payload] };
		case 'clear_cart':
			localStorage.setItem('cart', JSON.stringify([]))
			return { ...state, cart: [] }
		case 'remove_from_cart':
			let _newCart = state.cart.filter((product) => product._id != action.payload)
			localStorage.setItem('cart', JSON.stringify(_newCart))
			return { ...state, cart: _newCart }
		case 'decrease_quantity_by_1':
			let _productIndex = state.cart.findIndex(product => product._id == action.payload)
			state.cart[_productIndex].quantity > 1 ? state.cart[_productIndex].quantity-- : 1
			localStorage.setItem('cart', JSON.stringify(state.cart))
			return { ...state }
		case 'increase_quantity_by_1':
			let __newCart = [...state.cart]
			let __productIndex = __newCart.findIndex(product => product._id == action.payload)
			state.cart[__productIndex].quantity++
			localStorage.setItem('cart', JSON.stringify(__newCart))
			return { ...state, cart: __newCart }
		case 'set_product_quantity':
			let _productIdx = state.cart.findIndex(product => product._id === action.payload.id)
			if (_productIdx > -1) {
				if (Number.isNaN(action.payload.quantity) || action.payload.quantity == 0) {
					state.cart[_productIdx].quantity = 1
					localStorage.setItem('cart', JSON.stringify(state.cart))
					return { ...state }
				}
				state.cart[_productIdx].quantity = action.payload.quantity
				localStorage.setItem('cart', JSON.stringify(state.cart))
				return { ...state }
			}
		default:
			return state;
	}
}
let ShopContext = createContext({
	state: initState,
	dispatch: (action: action) => { },
}) as React.Context<{ state: state; dispatch: React.Dispatch<action> }>;

export default function ListingsLayout({ children }: PropsWithChildren) {
	let [state, dispatch] = useReducer(reducer, initState) as unknown as [
		state,
		React.Dispatch<action>
	];
	return (
		<ShopContext.Provider value={{ state, dispatch }}>
			<div className='mt-4 lg:mt-[77px] relative max-w-6xl mx-auto pb-4'>
				<ListingsSideNav />
				<main className='lg:ml-[370px] p-4 bg-white shadow-lg mb-4'>
					<SearchBar />
					<ListingsBanners />
					<div>{children}</div>
				</main>
				<div className='clear-both'></div>
			</div>
		</ShopContext.Provider>
	);
}
export { ShopContext };
