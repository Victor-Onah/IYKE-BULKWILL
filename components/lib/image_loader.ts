import { ImageLoaderProps } from 'next/image';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Returns the URL string to be used by Next JS while loading images.
 * This function provides a solution to the `ImageError` that results from the Next JS `Image` component
 */
export default function imageLoader({
	src,
	width,
	quality,
}: ImageLoaderProps): string {
	return process.env.NODE_ENV === 'development'
		? `http://localhost:3000${src}?w=${width}&q=${quality || 75}`
		: `https://iyke-bulkwill.com${src}?w=${width}&q=${quality || 75}`;
}
