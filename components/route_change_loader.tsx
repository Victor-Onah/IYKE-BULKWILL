import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function RouteChangeLoader() {
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
		function increaseLoadPosition(): void {
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
		router.events.on('routeChangeStart', increaseLoadPosition);
		router.events.on('routeChangeComplete', completeLoading);
	}, []);
	return (
		<div className='fixed top-0 left-0 h-1 w-full z-[100000]'>
			<div
				id='loading-bar'
				className='h-full w-0 bg-blue-700 transition-all'></div>
		</div>
	);
}
