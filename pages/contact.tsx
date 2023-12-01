import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import React, { FormEventHandler } from 'react'
import { FaPhone, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa6'

export const getStaticProps = function () {
	return {
		props: {
			appAuthToken: '$2b$10$DwcQnmA7g6FbBTzDnL9IfOQqafDd7Ka7SIDuAzbMMUskoGCO0206G'
		}
	}
} satisfies GetStaticProps<{ appAuthToken: string }>
export default function Contact({ appAuthToken }: InferGetStaticPropsType<typeof getStaticProps>) {
	/**
	 * Submit user contact form
	 */
	async function postMessage(e: Event): Promise<void> {
		e.preventDefault()
		let inputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>,
			form = {},
			messageBox = document.querySelector('textarea'),
			message = messageBox?.value.trim(),
			submitBtn = document.querySelector('#submit-btn') as HTMLButtonElement
		submitBtn.setAttribute('disabled', 'true')
		submitBtn.textContent = 'Please wait...'
		if (message?.length === 0) return
		for (let input of inputs) {
			switch (input.name) {
				case 'name':
					if (!input.value.match(/^[a-zA-Z'_-]{4,}/)) return alert('Please make sure to enter a valid name.');
					else form[input.name] = input.value.trim()
					break;
				case 'email':
					if (!input.value.match(/^[a-z0-9.]{4,}@[a-z0-9.]{3,}.[a-z]{2,}/)) return alert('Please make sure to enter a valid email.');
					else form[input.name] = input.value.trim()
					break;
				case 'phone-number':
					if (!input.value.match(/^(0|\+234)[0-9]{10}/)) return alert('Please make sure to enter a valid phone number.');
					else form['phoneNumber'] = input.value.trim()
					break;
			}
		}
		form['message'] = message
		try {
			let response = await fetch('/api/message', {
				method: 'POST',
				headers: {
					'X-Application-Authorization-Token': appAuthToken,
					'Content-Type': 'application/json'
				}, body: JSON.stringify(form)
			}), data = await response.json() as unknown as { success: boolean }
			if (!data.success) return alert('Unable to complete request at this time. Please try again later.')
			else alert('Your message was sent successfully, and you will be contacted via the media handles you provided.')
			submitBtn.removeAttribute('disabled')
			submitBtn.textContent = 'Submit'
		} catch (error) {
			console.error(error)
			alert('Unable to complete request at this time. Please try again later.')
			submitBtn.removeAttribute('disabled')
			submitBtn.textContent = 'Submit'
		}
	}
	return <>
		<Head>
			<title>
				Contact Us | Iyke-Bulkwilll
			</title>
		</Head>
		<main id='contact'>
			{/* Legend */}
			<div
				className=' flex pt-[90px] pb-[50px] px-4 flex-col justify-center gap-4 text-center text-blue-900'
				id='legend'>
				<h1
					style={{ fontFamily: 'Playfair Display' }}
					className='text-6xl font-bold capitalize max-md:text-4xl flex justify-center flex-wrap gap-2'>
					<img
						src='/images/logo.png'
						height={70}
						width={70}
					/>{' '}
					Iyke-Bulkwill Intl. Ltd.
				</h1>
				<div>
					<p className='flex justify-center'>
						Solar and CCTV | Installations | Real Estate Agent | Sales of
						Phones and Laptops | General Merchants
					</p>
					<p className='flex justify-center gap-2 mt-4'>
						<a
							className='flex gap-1 items-center'
							href='tel:+2348038022220'>
							<FaPhone /> 0803 802 2220
						</a>{' '}
						|
						<a
							className='flex gap-1 items-center'
							href='https://wa.me/2348038022220'>
							<FaWhatsapp /> 0803 802 2220
						</a>
					</p>
				</div>
			</div>
			{/* Legend */}

			{/* About us */}
			<div
				className='py-10 max-w-4xl m-auto'>
				<h2 className='mb-6 font-bold text-2xl text-center'>
					Contact Us
				</h2>
				<div className='flex p-4 gap-x-6 gap-y-8 m-auto max-[720px]:flex-col items-center max-w-6xl'>
					<div>
						<h3 className="font-semibold text-gray-600 text-lg text-center mb-3">Social Media</h3>
						<div className="flex max-[450px]:flex-wrap gap-2 justify-center items-center p-4">
							<a href="https://wa.me/2348038022220" className='text-green-200 bg-green-950 px-4 py-2 rounded-full flex gap-1 justify-center items-center'><FaWhatsapp /> WhatsApp</a>
							<a href="https://www.facebook.com/profile.php?id=100048470815037&ibextid=LQQJ4d" className='text-blue-200 bg-blue-950 px-4 py-2 rounded-full flex gap-1 justify-center items-center'><FaFacebook /> FaceBook</a>
							<a href="mailto:iykebulkwillintlltd@gmail.com" className='text-red-200 bg-red-950 px-4 py-2 rounded-full flex gap-1 justify-center items-center'><FaEnvelope /> Email</a>
						</div>
					</div>
					<h3 className="font-semibold text-gray-600 text-2xl">OR</h3>
					<div className='flex-grow w-full'>
						<h3 className="font-semibold text-gray-600 text-lg text-center mb-3">Fill Our Contact Form</h3>
						<form onSubmit={postMessage as unknown as FormEventHandler<HTMLFormElement>} className='w-full my-8 flex flex-col gap-2 max-w-[400px] mx-auto shadow-lg bg-white p-4'>
							<input className='border-2 border-black rounded px-4 py-2' name='name' placeholder='Name' type="text" />
							<input className='border-2 border-black rounded px-4 py-2' name='email' type="email" placeholder='Email' />
							<input className='border-2 border-black rounded px-4 py-2' name='phone-number' placeholder='Phone number' type="tel" />
							<textarea placeholder='Write your message here' className='border-2 border-black rounded px-4 py-2' cols={30} rows={10}></textarea>
							<button id='submit-btn' className='bg-blue-500 text-white px-4 py-2 rounded-md w-full max-w-[400px] m-auto block mb-4 active:scale-95 disabled:opacity-70'>Submit</button>
						</form>
					</div>
				</div>
			</div>
			{/* About us */}
		</main>
	</>
}