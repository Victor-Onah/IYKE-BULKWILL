import Link from 'next/link';
import React from 'react';

export default function Logo({ classes }: { classes?: string }) {
	return (
		<Link href='/' className={`${classes} flex justify-center items-center gap-1`}>
			<img
				src='/images/logo.png'
				height={35}
				width={35}
				alt='Logo'
			/>
			<h3 className='font-bold'>Iyke-Bulkwill</h3>
		</Link>
	);
}
