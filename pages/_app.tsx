import Layout from '../components/layout';
import '../assets/styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
	let getLayout = Component.getLayout || ((page: NextPage): NextPage => page);
	return (
		<Layout>
			<>
				<Header />
				{getLayout(<Component {...pageProps} />)}
				<Footer />
			</>
		</Layout>
	);
}
