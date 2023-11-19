import Image from 'next/image';
import { ComponentProps } from 'react';

export default function Logo({ classes }: { classes?: string }) {
	return (
		<div className={`${classes} flex justify-center items-center gap-1`}>
			<Image
				src='/images/logo.png'
				height={35}
				width={35}
				alt='Logo'
			/>
			<h3 className='font-bold'>Iyke-Bulkwill</h3>
		</div>
	);
}
