'use client'

import Image from 'next/image'
import Link from 'next/link'
import cx from 'classnames'
import { poppins } from '@/app/fonts'
import Logo from '@/assets/images/Logo.png'
import Socials from '@/components/Socials'

const Header = () => {
	return (
		<header className='py-8 shadow-[0px_0.8px_12px_#DEE2E6] sm:py-6'>
			<div className='container flex items-end justify-between sm:flex-col sm:items-center sm:gap-4'>
				<Link href='/'>
					<Image src={Logo} alt='Logo' width={236} height={47} />
				</Link>
				<div className='flex items-center gap-[18px]'>
					<p className={cx('text-red', poppins.className)}>Follow KENNEDY24</p>
					<Socials />
				</div>
			</div>
		</header>
	)
}

export default Header
