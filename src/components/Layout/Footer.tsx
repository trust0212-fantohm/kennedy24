'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/images/Logo.png'
import Socials from '@/components/Socials'

const links = [
	{
		title: 'ABOUT',
		href: '/about',
	},
	{
		title: 'HEADING 2',
		href: '/heading',
	},
	{
		title: 'CONTACT US',
		href: '/contact',
	},
	{
		title: 'PRIVACY POLICY',
		href: '/privacy-policy',
	},
	{
		title: 'TERMS OF SERVICE',
		href: '/terms-of-service',
	},
	{
		title: 'ACCESSIBILITY STATEMENT',
		href: '/accessibility-statement',
	},
]

const Footer = () => {
	return (
		<footer className='bg-gray-600 pb-6 pt-12'>
			<div className='container space-y-4'>
				<div className='flex items-start justify-between'>
					<ul className='grid grid-flow-col grid-cols-2 grid-rows-3 gap-4'>
						{links.map((link) => (
							<Link
								href={link.href}
								className='text-primary w-fit text-[0.8rem] font-bold'
								key={link.title}
							>
								{link.title}
							</Link>
						))}
					</ul>
					<Image src={Logo} alt='Logo' width={236} height={47} />
				</div>
				<div className='flex items-end justify-between'>
					<div className='invisible'>
						<p className='text-primary text-xs font-bold'>PAID FOR BY TEAM KENNEDY</p>
						<p className='text-primary text-[11px]'>
							Copyright @ 2023. All rights reserved.
						</p>
					</div>
					<Socials />
					<div>
						<p className='text-primary text-right text-[0.8rem] font-bold'>
							PAID FOR BY TEAM KENNEDY
						</p>
						<p className='text-primary text-right text-[0.7rem]'>
							Copyright @ 2023. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
