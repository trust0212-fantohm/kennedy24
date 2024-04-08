'use client'

import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Modal from '@/components/Modal'
import { store } from '@/redux/store'

export default function RootTemplate({ children }: PropsWithChildren) {
	return (
		<Provider store={store}>
			<div>
				<Header />
				{children}
				<Footer />
			</div>
			<Modal />
		</Provider>
	)
}
