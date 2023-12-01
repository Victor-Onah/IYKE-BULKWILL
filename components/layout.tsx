import React from 'react';
import RouteChangeLoader from './route_change_loader';

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