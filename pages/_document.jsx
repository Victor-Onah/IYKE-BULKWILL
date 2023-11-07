import { Head, Main, NextScript, Html } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html
			lang='en-BR'
			dir='ltr'>
			<Head>
				<meta
					name='description'
					content=''
				/>
				<meta
					name='og:title'
					content=''
				/>
				<meta
					name='og:description'
					content=''
				/>
				<meta
					name='og:image'
					content=''
				/>
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content=''
				/>
				<meta
					name='twitter:description'
					content=''
				/>
				<meta
					name='twitter:image'
					content=''
				/>
				<link
					rel='stylesheet'
					href='/styles/fonts.css'
				/>
				<link
					rel='shortcut icon'
					href='/images/favicon.png'
					type='image/png'
				/>
				<link
					rel='apple-touch-icon'
					href='/images/favicon.png'
				/>
				<Script src='/scripts/tailwindcss.js' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
