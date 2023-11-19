import React, { PropsWithChildren, createContext, useReducer } from 'react';
import ListingsSideNav from './listings_side_nav';
import ListingsBanners from './listings_banners';
import SearchBar from './search_bar';

type state = {
	fetchingProducts: boolean;
	productFetchStatus: 'failed' | 'success' | 'pending';
	products: any[];
	fetchingAutoComplete: boolean;
	autoCompleteFetchStatus: 'failed' | 'success' | 'pending';
	autoComplete: any[];
	fetchingSearchResults: boolean;
	searchResultsStatus: 'failed' | 'success' | 'pending';
	searchResults: any[];
	fetchingMoreProducts: [
		'solar panels' | 'cctvs' | 'phones' | 'laptops' | 'security lights' | 'all',
		'failed' | 'success' | 'pending',
		boolean
	];
	moreProducts: any[];
	currentCategory:
		| 'solar panels'
		| 'cctvs'
		| 'phones'
		| 'laptops'
		| 'security lights'
		| 'all';
	priceRange: [number, number];
	cart: any[];
};

type action = {
	type: actionType;
	payload?: any;
};
type actionType =
	| 'set_products'
	| 'set_product_fetch_status'
	| 'set_autocomplete'
	| 'set_autocomplete_fetch_status'
	| 'set_search_results'
	| 'set_search_results_fetch_status'
	| 'set_more_products'
	| 'set_current_category'
	| 'set_price_range'
	| 'add_to_cart'
	| 'clear_cart'
	| 'update_cart';
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
	priceRange: [40000, 60000],
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
		case 'set_price_range':
			return { ...state, priceRange: action.payload };
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
			return { ...state, cart: [...state.cart, action.payload] };
		default:
			return state;
	}
}
let ShopContext = createContext({
	state: initState,
	dispatch: (action: action) => {},
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
