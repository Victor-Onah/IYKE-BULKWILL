import { Head, Main, NextScript, Html } from 'next/document';
import React from 'react';

export default function Document() {
	return (
		<Html
			lang='en-BR'
			dir='ltr'>
			<Head>
				<meta
					name='description'
					content='We are dealers on Solar Panels and CCTV, Installations, Phones and Laptops, Real Estate Solution Providers and General Merchants'
				/>
				<meta
					name='og:title'
					content='IYKE-BULKWILL'
				/>
				<meta
					name='og:description'
					content='We are dealers on Solar Panels and CCTV, Installations, Phones and Laptops, Real Estate Solution Providers and General Merchants'
				/>
				<meta
					name='og:image'
					content='https://iyke-bulkwill.onrender.com/images/og_image.png'
				/>
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content='IYKE-BULKWILL'
				/>
				<meta
					name='twitter:description'
					content='We are dealers on Solar Panels and CCTV, Installations, Phones and Laptops, Real Estate Solution Providers and General Merchants'
				/>
				<meta
					name='twitter:image'
					content='https://iyke-bulkwill.onrender.com/images/og_image.png'
				/>
				<link
					rel='stylesheet'
					href='/styles/fonts.css'
				/>
				<link
					rel='shortcut icon'
					href='/images/logo.png'
					type='image/png'
				/>
				<link
					rel='apple-touch-icon'
					href='/images/logo.png'
					type='image/png'
				/>
				<script src='/scripts/tailwindcss.js'></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
