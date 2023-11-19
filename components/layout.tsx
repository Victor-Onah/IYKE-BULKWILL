import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * The root layout for the entire website. It includes global states and contexts.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<RouteChangeLoader />
			{children}
		</>
	);
}

/**
 * Custom loading bar for route change
 */
function RouteChangeLoader() {
	let router = useRouter();
	useEffect(() => {
		let loadingBar = document.getElementById('loading-bar') as HTMLDivElement;

		/**
		 * Displays the loading bar before the history changes
		 */
		function showLoader(): void {
			loadingBar.classList.remove('w-0', 'w-full', 'w-3/4', 'w-8');
			loadingBar.classList.add('w-8');
		}

		/**
		 * Increases the loading bar as the app begins to change route
		 */
		function increaseLoadPositon(): void {
			loadingBar.classList.remove('w-0', 'w-full', 'w-3/4', 'w-8');
			loadingBar.classList.add('w-3/4');
		}

		/**
		 * Complete loading
		 */
		function completeLoading(): void {
			loadingBar.classList.remove('w-0', 'w-full', 'w-3/4', 'w-8');
			loadingBar.classList.add('w-full');

			setTimeout(() => {
				loadingBar.style.opacity = '0';
				loadingBar.classList.remove('w-0', 'w-full', 'w-3/4', 'w-8');
				loadingBar.classList.add('w-0');
				loadingBar.style.opacity = '1';
			}, 1000);
		}
		router.events.on('beforeHistoryChange', showLoader);
		router.events.on('routeChangeStart', increaseLoadPositon);
		router.events.on('routeChangeComplete', completeLoading);
	});
	return (
		<div className='fixed top-0 left-0 h-1 w-full'>
			<div
				id='loading-bar'
				className='h-full w-0 bg-blue-500 transition-all'></div>
		</div>
	);
}
