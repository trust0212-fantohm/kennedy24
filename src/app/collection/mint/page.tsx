'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import Acknowledgement from '@/components/Acknowledgement'

export default function Mint() {
	const [isMinting, setIsMinting] = useState<boolean>(true)
	const [isMinted, setIsMinted] = useState<boolean>(true)
	const [percentage, setPercentage] = useState<number>(0)

	useEffect(() => {
		let interval: any

		if (isMinting) {
			setTimeout(() => {
				setIsMinting(false)
				setIsMinted(Math.random() > 0.5)
			}, 3200)
			interval = setInterval(() => {
				setPercentage((prev) => Math.min(prev + 1, 100))
			}, 30)
		}

		return () => clearInterval(interval)
	}, [isMinting])

	return (
		<div className='container flex min-h-[calc(100vh-329px)] flex-col pt-20 sm:min-h-[480px]'>
			{isMinting ? (
				<div className='flex flex-grow flex-col justify-center space-y-10'>
					<p className='text-center text-[120px] font-bold leading-[1.2] text-primary sm:text-[64px]'>
						Minting...
					</p>
					<p className='text-center text-2xl leading-[1.2] text-[#BBB8BF]'>
						{percentage}%
					</p>
				</div>
			) : isMinted ? (
				<div className='flex flex-grow flex-col items-center gap-10'>
					<p className='text-center text-[120px] font-bold leading-[1.2] text-primary sm:text-[54px]'>
						Minted
						<br />
						Successfully
					</p>
					<div className='flex h-[70px] w-[70px] items-center justify-center rounded-full bg-green text-5xl'>
						<Icon icon='mdi:tick' className='text-white' />
					</div>
					<Link href='/collection' className='btn-primary'>
						RETURN TO MAIN PAGE
					</Link>
				</div>
			) : (
				<div className='flex flex-grow flex-col items-center gap-10'>
					<p className='text-center text-[120px] font-bold leading-[1.2] text-primary sm:text-[54px]'>
						Error
					</p>
					<div className='flex h-[70px] w-[70px] items-center justify-center rounded-full bg-red text-5xl'>
						<Icon icon='mdi:close' className='text-white' />
					</div>
					<button
						className='btn-primary w-60'
						onClick={() => {
							setPercentage(0)
							setIsMinting(true)
						}}
					>
						TRY AGAIN
					</button>
				</div>
			)}
			<Acknowledgement className='flex-shrink-0 py-8' />
		</div>
	)
}
