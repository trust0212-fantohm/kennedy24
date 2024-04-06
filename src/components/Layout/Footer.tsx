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
		<footer className='bg-gray-600 pb-6 pt-12 sm:pt-6'>
			<div className='container space-y-4'>
				<div className='flex items-start justify-between sm:flex-col-reverse sm:gap-4'>
					<ul className='grid grid-flow-col grid-cols-2 grid-rows-3 gap-4 sm:gap-2'>
						{links.map((link) => (
							<Link
								href={link.href}
								className='w-fit text-[0.8rem] font-bold text-primary sm:h-6'
								key={link.title}
							>
								{link.title}
							</Link>
						))}
					</ul>
					<Image src={Logo} alt='Logo' width={236} height={47} />
				</div>
				<div className='flex items-end justify-between sm:flex-col sm:items-center sm:gap-4'>
					<div className='invisible sm:hidden'>
						<p className='text-xs font-bold text-primary'>PAID FOR BY TEAM KENNEDY</p>
						<p className='text-[11px] text-primary'>
							Copyright @ 2023. All rights reserved.
						</p>
					</div>
					<Socials />
					<div>
						<p className='text-right text-[0.8rem] font-bold text-primary sm:text-center'>
							PAID FOR BY TEAM KENNEDY
						</p>
						<p className='text-right text-[0.7rem] text-primary sm:text-center'>
							Copyright @ 2023. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
