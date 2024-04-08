'use client'

import cx from 'classnames'
import ModalSubmitButton from '@/components/Button/ModalSubmitButton'
import useAppDispatch from '@/hooks/useAppDispatch'
import { setConfirmCodeModalOpen } from '@/redux/slices/modal'

interface Props {
	isOpen: boolean
	onClose: () => void
}

const BuyNFTModal: React.FC<Props> = ({ isOpen, onClose }) => {
	const dispatch = useAppDispatch()

	const handleBuy = () => {
		onClose()
		dispatch(setConfirmCodeModalOpen(true))
	}

	return (
		<div
			className={cx(
				'fixed inset-0 z-[1300] flex items-center justify-center bg-white/90 p-4 transition-all duration-200 ease-in-out',
				isOpen
					? 'pointer-events-auto translate-y-0 opacity-100'
					: 'pointer-events-none -translate-y-8 opacity-0'
			)}
		>
			<div className='absolute inset-0' onClick={onClose} />
			<div className='relative z-10 w-full max-w-md space-y-8 rounded-2xl bg-primary px-10 py-8 sm:px-6 sm:py-8'>
				<p className='modal-header'>Buy NFT</p>
				<div className='space-y-10'>
					<div className='space-y-4'>
						<input type='text' className='modal-input' placeholder='Email' />
						<input type='text' className='modal-input' placeholder='Password' />
					</div>
					<ModalSubmitButton text='Buy' onClick={handleBuy} />
				</div>
			</div>
		</div>
	)
}

export default BuyNFTModal
