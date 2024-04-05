import { PropsWithChildren } from 'react'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'

export default function RootTemplate({ children }: PropsWithChildren) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
