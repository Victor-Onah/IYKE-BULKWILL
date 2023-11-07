import Layout from '../components/layout';
import '../assets/styles/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default function App({ Component, pageProps }) {
	let getLayout = Component.getLayout || ((page) => page);
	return (
		<Layout>
			<Header />
			{getLayout(<Component />)}
			<Footer />
		</Layout>
	);
}
