import Image from 'next/image';

export default function Logo({ classes }) {
	return (
		<div className={`${classes} flex justify-center items-center gap-1`}>
			<Image
				src='/images/logo.png'
				height={35}
				width={35}
			/>
			<h3 className='font-bold'>Iyke-Bulkwill</h3>
		</div>
	);
}
