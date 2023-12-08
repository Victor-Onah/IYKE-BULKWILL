/**
 * Application state
 */
export type state = {
	fetchingProducts: boolean;
	productFetchStatus: 'failed' | 'success' | 'pending';
	products: product[];
	fetchingAutoComplete: boolean;
	autoCompleteFetchStatus: 'failed' | 'success' | 'pending';
	autoComplete: any[];
	fetchingSearchResults: boolean;
	searchResultsStatus: 'failed' | 'success' | 'pending';
	searchResults: any[];
	fetchingMoreProducts: [
		(
			| 'solar panels'
			| 'cctvs'
			| 'phones'
			| 'laptops'
			| 'security lights'
			| 'home lights'
			| 'all'
		),
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
		| 'home lights'
		| 'all';
	cart: cartItem[];
};

export type cartItem = product & {
	quantity: number;
};

export type action = {
	type: actionType;
	payload?: any;
};

export type actionType =
	| 'set_products'
	| 'set_product_fetch_status'
	| 'set_autocomplete'
	| 'set_autocomplete_fetch_status'
	| 'set_search_results'
	| 'set_search_results_fetch_status'
	| 'set_more_products'
	| 'set_current_category'
	| 'add_to_cart'
	| 'clear_cart'
	| 'remove_from_cart'
	| 'increase_quantity_by_1'
	| 'decrease_quantity_by_1'
	| 'add_to_cart_bulk'
	| 'set_product_quantity';

export type product = {
	_id: string;
	name: string;
	description: string;
	imageUrl: string;
	category: string;
	quantityPurchased: number;
	dateUploaded: Date | number | string;
};

export type order = {
	_id: string;
	customerContact: [string, string, string];
	products: cartItem[];
	dateCreated: Date | string | number;
	totalItems: number;
	totalUniqueItems: number;
	completed: 'yes' | 'no';
};

export type message = {
	_id: string;
	name: string;
	email: string;
	phoneNumber: string;
	message: string;
	replied: 'yes' | 'no';
};
