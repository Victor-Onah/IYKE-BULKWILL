import React, { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { FaAngleLeft, FaAngleRight, FaCartPlus, FaCheckDouble, FaEnvelope, FaImage, FaMessage, FaPhone, FaTrashCan, FaUpload, FaX } from 'react-icons/fa6'
import { product, message, order } from '../components/types'
import Image from 'next/image'
import Head from 'next/head'

export const getStaticProps = async function () {
	return {
		props: {
			authToken: 'x0atvbWX74ghIJsd120lMQaplQ',
			apiAuthToken: '$2b$10$DwcQnmA7g6FbBTzDnL9IfOQqafDd7Ka7SIDuAzbMMUskoGCO0206G'
		}
	}
} satisfies GetStaticProps<{ authToken: string, apiAuthToken: string }>

export default function AdminDashboard({ authToken, apiAuthToken }: InferGetStaticPropsType<typeof getStaticProps>) {
	let [requestingAction, setRequestingAction] = useState(false)

	let [action, setAction] = useState(null) as unknown as ['view orders' | 'delete products' | 'upload a product' | 'view messages', (prev: typeof action | undefined) => typeof action]

	let [imageName, setImageName] = useState(null) as unknown as [string | null, (prev: typeof imageName | ((prev: string) => typeof imageName)) => typeof imageName]

	let [products, setProducts] = useState() as unknown as [product[], (prev: typeof products | ((prev: product[]) => typeof products)) => typeof products]

	let [productFetchStatus, setProductFetchStatus] = useState('pending') as unknown as ['pending' | 'failed' | 'success', (prev: typeof productFetchStatus | ((prev: typeof productFetchStatus) => typeof productFetchStatus)) => typeof productFetchStatus]

	let [productsToDelete, setProductsToDelete] = useState([]) as unknown as [string[], (prev: typeof productsToDelete | ((prev: typeof productsToDelete) => typeof productsToDelete)) => typeof productsToDelete]

	let [messages, setMessages] = useState() as unknown as [message[], (prev: typeof messages | ((prev: message[]) => typeof messages)) => typeof messages]

	let [messageFetchStatus, setMessageFetchStatus] = useState('pending') as unknown as ['pending' | 'failed' | 'success', (prev: typeof messageFetchStatus | ((prev: typeof messageFetchStatus) => typeof messageFetchStatus)) => typeof messageFetchStatus]

	let [orders, setOrders] = useState() as unknown as [order[], (prev: typeof orders | ((prev: order[]) => typeof orders)) => typeof orders]

	let [orderFetchStatus, setOrderFetchStatus] = useState('pending') as unknown as ['pending' | 'failed' | 'success', (prev: typeof orderFetchStatus | ((prev: typeof orderFetchStatus) => typeof orderFetchStatus)) => typeof orderFetchStatus]

	let [authorized, setAuthorized] = useState(false) as unknown as [boolean, (prev: typeof authorized | ((prev: typeof authorized) => typeof authorized)) => typeof authorized]

	/**
	 * upload Product
	 */
	async function uploadProduct(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		let productNameField = document.getElementById('product-name') as HTMLInputElement,
			productCategoryField = document.getElementById('product-category') as HTMLSelectElement,
			productImageField = document.getElementById('product-image') as HTMLInputElement,
			submitBtn = document.getElementById('submit-btn') as HTMLButtonElement,
			productName = productNameField.value.trim(),
			productCategory = productCategoryField.value.trim(),
			productImage = productImageField.files ? productImageField.files[0] : null

		if (!productImage) return alert('Please select an image')

		submitBtn.setAttribute('disabled', 'true')
		submitBtn.textContent = 'Please wait...'
		let form = new FormData()
		form.append('productName', productName)
		form.append('productImage', productImage)
		form.append('productCategory', productCategory)

		try {
			let response: any = await fetch('/api/admin/upload', {
				method: 'POST',
				body: form,
				headers: {
					'X-Admin-Authorization-Token': authToken,
					'X-Application-Authorization-Token': apiAuthToken
				}
			})
			response = await response.json()
			if (!response.success) {
				submitBtn.removeAttribute('disabled')
				submitBtn.textContent = 'Finish'
				return alert('Failed to complete request.')
			}
			alert('Product upload was successful!')
			setAction(undefined)
			setRequestingAction(false)
			setImageName(null)
		} catch (error) {
			console.error(error)
			alert('Failed to complete request.')
			submitBtn.removeAttribute('disabled')
			submitBtn.textContent = 'Finish'
		}
	}

	/**
	 * Load products by pages
	 */
	async function loadProducts(): Promise<product[]> {
		setProductFetchStatus('pending')

		try {
			let response: any = await fetch(`/api/listings?page=1&all=${true}`, {
				headers: {
					'x-application-authorization-token': apiAuthToken
				}
			})
			response = await response.json()
			setProductFetchStatus('success')
			return response.reverse()
		} catch (error) {
			setProductFetchStatus('failed')
			return []
		}
	}

	/**
	 * Select items to be deleted
	 */
	async function selectItem(e) {
		if (e.target.checked) {
			setProductsToDelete(prev => {
				console.log(e.target.id)
				return [...prev, e.target.id]
			})
		} else {
			setProductsToDelete(prev => {
				return prev.filter(id => id !== e.target.id)
			})
		}
	}

	/**
	 * Delete products
	 */
	async function deleteProducts(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (confirm(`You are about to delete ${productsToDelete.length} products, do you wish to continue?`)) {
			let submitBtn = document.getElementById('submit-btn') as HTMLButtonElement
			try {
				submitBtn?.setAttribute('disabled', 'true')
				submitBtn.textContent = 'Please wait...'
				let response: any = await fetch('/api/admin/delete', {
					method: 'DELETE',
					body: JSON.stringify(productsToDelete),
					headers: {
						'X-Admin-Authorization-Token': authToken,
						'X-Application-Authorization-Token': apiAuthToken,
						'Content-Type': 'application/json'
					}
				})
				response = await response.json()
				if (!response.success) {
					submitBtn?.removeAttribute('disabled')
					submitBtn.textContent = 'Delete all'
					return alert('Failed to complete request. Please try again.')
				}
				alert('Products deleted successfully!')
				setProductsToDelete([])
				setAction(undefined)
				setRequestingAction(false)
			} catch (error) {
				console.error(error)
				alert('Failed to complete request. Please try again.')
				submitBtn?.removeAttribute('disabled')
				submitBtn.textContent = 'Delete all'
			}
		}
	}

	/**
	 * Load messages
	 */
	async function loadMessages(): Promise<message[]> {
		setMessageFetchStatus('pending')

		try {
			let response: any = await fetch(`/api/admin/messages`, {
				headers: {
					'X-Admin-Authorization-Token': authToken,
					'x-application-authorization-token': apiAuthToken
				}
			})
			response = await response.json()
			setMessageFetchStatus('success')
			return response.reverse()
		} catch (error) {
			console.error(error)
			setMessageFetchStatus('failed')
			return []
		}
	}

	/**
	 * Mark message as replied
	 */
	async function markMessageAsReplied(e): Promise<void> {
		e.target.setAttribute('disabled', 'true')
		e.target.textContent = 'Please wait...'
		try {
			let response: any = await fetch(`/api/admin/messages/mark/${e.target.dataset.id}`, {
				method: 'PATCH',
				headers: {
					'X-Admin-Authorization-Token': authToken,
					'x-application-authorization-token': apiAuthToken
				}
			})
			response = await response.json()
			if (response.success) {
				let _messages = [...messages]
				_messages[messages.findIndex(message => message._id === e.target.dataset.id)].replied = 'yes'
				setMessages(_messages)
			} else {
				alert('Failed to complete request')
				e.target.removeAttribute('disabled')
				e.target.textContent = 'Mark as replied'
			}
		} catch (error) {
			console.error(error)
			alert('Failed to complete request')
			e.target.removeAttribute('disabled')
			e.target.textContent = 'Mark as replied'
		}
	}

	/**
	 * Load orders
	 */
	async function loadOrders(): Promise<order[]> {
		setOrderFetchStatus('pending')

		try {
			let response: any = await fetch(`/api/admin/orders`, {
				headers: {
					'X-Admin-Authorization-Token': authToken,
					'x-application-authorization-token': apiAuthToken
				}
			})
			response = await response.json()
			setOrderFetchStatus('success')
			return response.reverse()
		} catch (error) {
			console.error(error)
			setOrderFetchStatus('failed')
			return []
		}
	}

	/**
	 * Mark order as completed
	 */
	async function markOrderAsCompleted(e) {
		e.target.setAttribute('disabled', 'true')
		e.target.textContent = 'Please wait...'
		try {
			let response: any = await fetch(`/api/admin/orders/mark/${e.target.dataset.id}`, {
				method: 'PATCH',
				headers: {
					'X-Admin-Authorization-Token': authToken,
					'x-application-authorization-token': apiAuthToken
				}
			})
			response = await response.json()
			if (response.success) {
				let _orders = [...orders]
				_orders[orders.findIndex(order => order._id === e.target.dataset.id)].completed = 'yes'
				setOrders(_orders)
			} else {
				alert('Failed to complete request')
				e.target.removeAttribute('disabled')
				e.target.textContent = 'Mark as completed'
			}
		} catch (error) {
			console.error(error)
			alert('Failed to complete request')
			e.target.removeAttribute('disabled')
			e.target.textContent = 'Mark as completed'
		}
	}

	/**
	 * Authorize admin
	 */
	async function authorizeAdmin(e) {
		e.preventDefault()

		let username = document.getElementById('username') as HTMLInputElement,
			password = document.getElementById('password') as HTMLInputElement,
			submitBtn = document.getElementById('submit-btn');

		try {
			submitBtn?.setAttribute('disabled', 'true')
			submitBtn.textContent = 'Please wait...'

			let response: any = await fetch(`/api/admin/authorize`, {
				method: 'POST',
				headers: {
					'X-Admin-Authorization-Token': authToken,
					'x-application-authorization-token': apiAuthToken,
					'Content-Type': 'application/json'
				}
				, body: JSON.stringify({
					username: username?.value.trim(), password: password?.value.trim()
				})
			})
			response = await response.json()
			if (response.success) {
				setAuthorized(true)
			} else {
				alert('Incorrect login credentials. Please check the values and try again')
				submitBtn?.removeAttribute('disabled')
				submitBtn.textContent = 'Submit'
			}
		} catch (error) {
			console.error(error)
			alert('Failed to complete request due unknown error.')
			submitBtn?.removeAttribute('disabled')
			submitBtn.textContent = 'Submit'
		}
	}
	if (authorized) {
		return <>
			<Head>
				<title>Admin Dashboard</title>
			</Head>
			<div className='max-w-5xl mx-auto p-4 my-16'>
				<h1 className='font-bold text-2xl text-zinc-500 mb-8'>
					<Link href='/admin'>Admin Dashboard</Link>
				</h1>
				<div>
					<h2 className='font-semibold text-lg text-zinc-500 mb-4'>Welcome sir Iyke, what would you like to do?</h2>
					<div className='grid grid-cols-4 max-[1020px]:grid-cols-4 max-[768px]:grid-cols-3 max-[480px]:grid-cols-2 max-[250px]:grid-cols-1 gap-4'>
						<div onClick={() => {
							setRequestingAction(true)
							setAction('upload a product')
						}} className='bg-blue-700 text-white p-4 flex flex-col justify-center items-center gap-2 hover:shadow-2xl active:scale-95'>
							<FaUpload />
							<h3 className='text-center'>Upload a product</h3>
						</div>
						<div onClick={async () => {
							setRequestingAction(true)
							setProducts(await loadProducts())
							setAction('delete products')
						}} className='bg-red-700 text-white p-4 flex flex-col justify-center items-center gap-2 hover:shadow-2xl active:scale-95'>
							<FaTrashCan />
							<h3 className='text-center'>Delete products</h3>
						</div>
						<div onClick={async () => {
							setRequestingAction(true)
							setMessages(await loadMessages())
							setAction('view messages')
						}} className='bg-green-700 text-white p-4 flex flex-col justify-center items-center gap-2 hover:shadow-2xl active:scale-95'>
							<FaMessage />
							<h3 className='text-center'>View messages</h3>
						</div>
						<div onClick={async () => {
							setRequestingAction(true)
							setOrders(await loadOrders())
							setAction('view orders')
						}} className='bg-yellow-700 text-white p-4 flex flex-col justify-center items-center gap-2 hover:shadow-2xl active:scale-95'>
							<FaCartPlus />
							<h3 className='text-center'>View orders</h3>
						</div>
						<div onClick={async () => {
							setRequestingAction(true)
							setAction(undefined)
							setProducts(await loadProducts())
						}} className='bg-purple-700 text-white p-4 flex flex-col justify-center items-center gap-2 hover:shadow-2xl active:scale-95'>
							<FaCartPlus />
							<h3 className='text-center'>View all products</h3>
						</div>
					</div>
				</div>
				{
					requestingAction && <div className='fixed top-0 bottom-0 z-[1000] h-full left-0 w-full flex justify-center items-center p-4' style={{
						backdropFilter: 'blur(15px)'
					}}>
						<div className='relative min-h-[250px] max-h-full w-full max-w-[600px] bg-white will-change overflow-hidden'>
							<span onClick={() => {
								setRequestingAction(false);
								setProductsToDelete([]);
								setAction(undefined)
								setImageName(null)
							}} className='absolute top-2 right-2 w-8 h-8 flex justify-center items-center rounded-full bg-slate-200 active:bg-slate-400 shadow-lg'>
								<FaX />
							</span>
							{
								action === 'upload a product' ? <div>
									<form onSubmit={uploadProduct} className='p-4 flex flex-col gap-2 w-full max-w-[400px] mx-auto'>
										<h4 className="text-lg text-zinc-600 text-center mb-4 font-semibold">Upload Product</h4>
										<div>
											<label className='text-sm text-zinc-700 block' htmlFor="product-name">Product name</label>
											<input required className='outline-none focus:outline-none focus:border-blue-700 border-2 min-w-0 rounded border-zinc-500 w-full px-2 py-1' id='product-name' placeholder='Product name' type="text" />
										</div>
										<div>
											<label className='text-sm text-zinc-700 block' htmlFor="product-category">Category</label>
											<select defaultValue={''} required className='w-full px-2 py-1 bg-slate-100 active:bg-slate-200 rounded' name="product-category" id='product-category'>
												<option value="solar panels">Solar Panels</option>
												<option value="cctvs">CCTVs</option>
												<option value="security lights">Security Lights</option>
												<option value="phones">Phones</option>
												<option value="laptops">Laptops</option>
												<option value="home lights">Home Lights</option>
												<option value="real estate">Real Estate</option>
											</select>
										</div>
										<div onClick={(e) => {
											e.currentTarget.querySelector('input')?.click()
										}} className='relative p-4 bg-blue-700 text-white flex text-center gap-2 justify-center items-center max-w-[250px] active:scale-95'>
											<input required id='product-image' onChange={(e) => setImageName(e.target.files ? e.target.files[0].name : null)} type="file" accept='image/*' className='w-0 h-0 absolute' />
											<FaUpload />
											<p>Upload product image</p>
										</div>
										{
											imageName && <div className='flex gap-2 items-center'>
												<FaImage /> {imageName}
											</div>
										}
										<button id='submit-btn' className='border-2 border-blue-700 rounded-full px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-white active:scale-95 font-bold disabled:bg-blue-700 disabled:text-white disabled:opacity-70' type="submit">Finish</button>
									</form>
								</div> : action === 'delete products' ? <div className='p-4'>
									<h4 className="text-lg text-center mb-4 font-semibold text-zinc-600">Delete Products</h4>
									<div className='pt-8 flex flex-col gap-2 relative'>
										{
											productFetchStatus === 'pending' ? <h5 className="text-zinc-400 text-center text-semibold">Loading products...</h5> : productFetchStatus === 'failed' ? <h5 className="text-zinc-400 text-center text-semibold">Failed to load products</h5> : products.length < 1 ? <h5 className="text-zinc-400 text-center text-semibold">No products to show</h5> : <form className='overflow-hidden grid relative' onSubmit={deleteProducts}>
												<div className='max-h-[55vh] overflow-auto mb-16 flex flex-col gap-2'>
													{
														products.map(product => <div className='flex gap-2 justify-start items-center bg-slate-100 rounded p-2 active:scale-95' key={product._id}>
															<input onChange={selectItem} type="checkbox" id={product._id} />
															<Image className='h-50 aspect-square rounded-full' src={product.imageUrl} alt={product.name} height={50} width={50} />
															<label className='flex-grow flex-shrink text-sm' htmlFor={product._id}>{product.name}</label>
														</div>)
													}
												</div>

												{
													productsToDelete.length > 0 && <button id='submit-btn' className='bg-red-700 text-white px-4 py-2 rounded w-full absolute bottom-4 disabled:opacity-75' type='submit'>Delete all</button>
												}
											</form>
										}
									</div>
								</div> : action === 'view messages' ? <div className='p-4 overflow-hidden'>
									<h4 className="text-lg text-center mb-4 font-semibold text-zinc-600">Messages</h4>
									<div className='flex flex-col gap-2 max-h-[70vh] overflow-scroll'>
										{
											messageFetchStatus === 'pending' ? <h5 className="text-zinc-400 text-center text-semibold">Loading messages...</h5> : messageFetchStatus === 'failed' ? <h5 className="text-zinc-400 text-center text-semibold">Failed to load messages</h5> : messages.length < 1 ? <h5 className="text-zinc-400 text-center text-semibold">No messages to show</h5> : <div className='flex flex-col gap-2'>
												{
													messages.map(message => <div key={message._id} className='bg-slate-50 rounded-lg p-2 flex flex-col gap-2 hover:shadow-lg'>
														<h5 className='text-sm font-bold'>{message.name}</h5>
														<p>{message.message}</p>
														<div className='text-sm flex justify-center items-center'>
															<a className='flex gap-2 bg-blue-50 text-blue-700 rounded-full px-2 py-1 items-center active:scale-95' href={`mailto:${message.email}`}><FaEnvelope /> Email</a>
															<a className='flex gap-2 bg-blue-50 text-blue-700 rounded-full px-2 py-1 items-center active:scale-95' href={`tel:${message.phoneNumber}`}><FaPhone /> Call</a>
														</div>
														{
															message.replied === 'yes' ? <p className='text-[10px] flex justify-end items-center gap-2 text-blue-700'><FaCheckDouble /> Replied</p> : <button onClick={markMessageAsReplied} data-id={message._id} className='px-2 py-1 text-sm bg-blue-700 text-white rounded full w-full active:scale-95 disabled:opacity-75'>Mark as replied</button>
														}
													</div>)
												}
											</div>
										}
									</div>
								</div> : action === 'view orders' ? <div className='p-4 overflow-hidden'>
									<h4 className="text-lg text-center mb-4 font-semibold text-zinc-600">Orders</h4>
									<div className='flex flex-col gap-2 max-h-[70vh] overflow-scroll'>
										{
											orderFetchStatus === 'pending' ? <h5 className="text-zinc-400 text-center text-semibold">Loading orders...</h5> : orderFetchStatus === 'failed' ? <h5 className="text-zinc-400 text-center text-semibold">Failed to orders</h5> : orders.length < 1 ? <h5 className="text-zinc-400 text-center text-semibold">No orders to show</h5> : <div className='flex flex-col gap-2'>
												{
													orders.map(order => <div key={order._id} className='bg-slate-50 rounded-lg p-2 flex flex-col gap-2 hover:shadow-lg'>
														<h5 className='text-lg font-bold'>{order.customerContact[0]}</h5>
														<p className='text-sm'>{new Date(order.dateCreated).toDateString()}</p>
														<div className='text-sm flex flex-col gap-2'>
															<h6 className='text-center font-bold text-zinc-600'>Order Summary</h6>
															<div className='flex flex-col gap-2'>
																{
																	order.products.map(product => <div className='flex gap-2'>
																		<Image className='aspect-square rounded-full h-50 w-50' height={50} width={50} src={product.imageUrl} alt={product.name} />
																		<p className='font-semibold'>{product.name}</p>
																		<small className='font-bold'>({product.quantity})</small>
																	</div>)
																}
															</div>
															<div className='text-sm flex justify-center items-center'>
																<a className='flex gap-2 bg-blue-50 text-blue-700 rounded-full px-2 py-1 items-center active:scale-95' href={`mailto:${order.customerContact[0]}`}><FaEnvelope /> Email</a>
																<a className='flex gap-2 bg-blue-50 text-blue-700 rounded-full px-2 py-1 items-center active:scale-95' href={`tel:${order.customerContact[2]}`}><FaPhone /> Call</a>
															</div>
														</div>
														{
															order.completed === 'yes' ? <p className='text-[10px] flex justify-end items-center gap-2 text-blue-700'><FaCheckDouble /> Completed</p> : <button onClick={markOrderAsCompleted} data-id={order._id} className='px-2 py-1 text-sm bg-blue-700 text-white rounded full w-full active:scale-95 disabled:opacity-75'>Mark as completed</button>
														}
													</div>)
												}
											</div>
										}
									</div>
								</div> : <div className='p-4'>
									<h4 className="text-lg text-center mb-4 font-semibold text-zinc-600">Products</h4>
									<div className='pt-8 flex flex-col gap-2 relative'>
										{
											productFetchStatus === 'pending' ? <h5 className="text-zinc-400 text-center text-semibold">Loading products...</h5> : productFetchStatus === 'failed' ? <h5 className="text-zinc-400 text-center text-semibold">Failed to load products</h5> : products.length < 1 ? <h5 className="text-zinc-400 text-center text-semibold">No products to show</h5> : <div className='overflow-hidden grid relative'>
												<div className='max-h-[55vh] overflow-auto mb-16 flex flex-col gap-2'>
													{
														products.map(product => <div className='flex gap-2 justify-start items-center bg-slate-100 rounded p-2 active:scale-95' key={product._id}>
															<Image className='h-50 aspect-square rounded-full' src={product.imageUrl} alt={product.name} height={50} width={50} />
															<p className='flex-grow flex-shrink text-sm' htmlFor={product._id}>{product.name}</p>
														</div>)
													}
												</div>
											</div>
										}
									</div>
								</div>
							}
						</div>
					</div>
				}
			</div>
		</>
	} else {
		return <>
			<Head>
				<title>Admin Login</title>
			</Head>
			<div className='min-h-[100vh] flex justify-center items-center p-4'>
				<form onSubmit={authorizeAdmin} className='flex flex-col gap-2 p-4 rounded shadow-lg'>
					<h2 className='font-2xl text-center font-bold text-zinc-600'>Authorization Form</h2>
					<p className='font-lg font-semibold text-center text-zinc-600'>Please enter the correct information to continue</p>
					<input id='username' className='p-2 rounded border-2 border-zinc-700' placeholder='Admin username' required type="text" />
					<div className='relative'>
						<input id='password' className='p-2 rounded border-2 border-zinc-700 w-full' placeholder='Admin password' required type="password" />
						<small onClick={(e) => {
							let { currentTarget } = e,
								sibling = currentTarget.previousElementSibling as HTMLInputElement
							if (sibling.type === 'password') {
								sibling.setAttribute('type', 'text')
								currentTarget.textContent = 'Hide'
							} else {
								sibling.setAttribute('type', 'password')
								currentTarget.textContent = 'Show'
							}
						}} className="text-[8px] absolute right-2 top-1/2 -translate-y-1/2 font-extrabold cursor-pointer">Show</small>
					</div>
					<button id='submit-btn' className='bg-blue-700 text-white disabled:opacity-75 active:scale-95 px-4 py-2 rounded' type="submit">Submit</button>
				</form>
			</div>
		</>
	}
}