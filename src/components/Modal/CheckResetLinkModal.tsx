'use client'

import cx from 'classnames'
import { poppins } from '@/app/fonts'
import ModalSubmitButton from '@/components/Button/ModalSubmitButton'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { setCheckResetLinkModalOpen } from '@/redux/slices/modal'

const CheckResetLinkModal = () => {
	const dispatch = useAppDispatch()
	const isOpen = useAppSelector((state) => state.modal.checkResetLinkModalOpen)

	const handleCloseModal = () => {
		dispatch(setCheckResetLinkModalOpen(false))
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
			<div className='absolute inset-0' onClick={handleCloseModal} />
			<div className='relative z-10 w-full max-w-md space-y-8 rounded-2xl bg-primary px-10 py-8 sm:px-6 sm:py-8'>
				<p className='modal-header'>Check your email</p>
				<div className='space-y-10'>
					<p
						className={cx(
							'max-w-72 text-center font-light text-white',
							poppins.className
						)}
					>
						We have sent you a link to reset your password.
						<br />
						Please, check your email
					</p>
					<ModalSubmitButton text='Reset Password' />
				</div>
			</div>
		</div>
	)
}

export default CheckResetLinkModal
