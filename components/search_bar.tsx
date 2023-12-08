import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export const getStaticProps = (() => {
	return {
		props: {
			appAuthToken:
				'$2b$10$DwcQnmA7g6FbBTzDnL9IfOQqafDd7Ka7SIDuAzbMMUskoGCO0206G',
		},
	};
}) satisfies GetStaticProps<{ appAuthToken: string }>;

export default function SearchBar({
	appAuthToken,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
	let [suggestions, setSuggestions] = useState([]) as unknown as [
		string[],
		(arr: string[]) => string[]
	];
	let [query, setQuery] = useState('');
	let router = useRouter();
	/** Get suggestions for searches */
	async function getSuggestions(x = query): Promise<void> {
		try {
			let response = await fetch(
				`/api/search/suggestions?q=${x.trim().toLowerCase()}`,
				{
					headers: {
						'X-Application-Authorization-Token': appAuthToken,
					},
				}
			);
			let res: string[] = await response.json();
			setSuggestions(res);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		setQuery(router.query.q ? router.query.q as unknown as string : '')
	}, [router.query])
	return (
		<div className='w-full shadow-lg mb-4 rounded-md relative'>
			<form className='flex w-full p-4 gap-2'>
				<input
					type='text'
					className='flex-grow border-2 border-black px-2 py-1 rounded focus:outline-none min-w-0'
					placeholder='Search for products'
					value={query}
					onChange={({ target }) => {
						setQuery(target.value);
						getSuggestions(target.value);
					}}
					onBlur={(e) => setTimeout(() => setSuggestions([]), 300)}
					required
					id='search-input'
				/>
				<button
					type='submit'
					onClick={
						(e) => {
							e.preventDefault()
							router.push(`/listings/search?q=${query}`)
							let searchInput = document.getElementById('search-input') as HTMLInputElement
							searchInput.blur()
						}
					}
					className='bg-blue-700 text-white rounded whitespace-nowrap px-4 py-2 flex justify-center items-center gap-2'>
					<FaMagnifyingGlass />
				</button>
			</form>
			{suggestions.length > 0 ? (
				<div className='absolute top-20 z-30 rounded shadow-lg bg-white left-0 w-full flex flex-col overflow-x-clip overflow-y-auto max-h-44'>
					{suggestions.map((suggestion) => (
						<small
							onClick={() => router.push(`/listings/search?q=${suggestion}`)}
							className='flex-grow p-4 hover:bg-slate-200'>
							{suggestion}
						</small>
					))}
				</div>
			) : (
				''
			)}
		</div>
	);
}
