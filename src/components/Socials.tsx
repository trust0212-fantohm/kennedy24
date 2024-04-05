import Link from 'next/link'
import { Icon } from '@iconify/react'
import cx from 'classnames'

const socials = [
	{
		name: 'Instagram',
		href: 'https://instagram.com',
		icon: 'fa:instagram',
	},
	{
		name: 'Facebook',
		href: 'https://facebook.com',
		icon: 'fa:facebook',
	},
	{
		name: 'Tiktok',
		href: 'https://tiktok.com',
		icon: 'formkit:tiktok',
	},
	{
		name: 'Youtube',
		href: 'https://youtube.com',
		icon: 'formkit:youtube',
	},
]

interface Props {
	className?: string
}

const Socials: React.FC<Props> = ({ className }) => {
	return (
		<ul className={cx('flex gap-2', className)}>
			{socials.map((social) => (
				<li key={social.name}>
					<Link
						href={social.href}
						className='bg-primary flex h-10 w-10 items-center justify-center rounded-full'
					>
						<Icon icon={social.icon} className='text-white' />
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Socials
