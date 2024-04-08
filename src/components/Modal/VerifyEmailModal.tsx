'use client'

import VerificationInput from 'react-verification-input'
import cx from 'classnames'
import { poppins } from '@/app/fonts'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { setVerifyEmailModalOpen } from '@/redux/slices/modal'

const VerifyEmailModal = () => {
	const dispatch = useAppDispatch()
	const isOpen = useAppSelector((state) => state.modal.verifyEmailModalOpen)

	const handleCloseModal = () => {
		dispatch(setVerifyEmailModalOpen(false))
	}

	const handleVerify = () => {
		handleCloseModal()
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
			<div className='relative z-10 w-full max-w-md space-y-8 rounded-2xl bg-primary px-[30px] pb-24 pt-16 sm:px-4 sm:pt-8'>
				<div>
					<p className='modal-header'>Verify your email address</p>
					<p className={cx('text-center font-light text-white', poppins.className)}>
						We have sent you a 6 digit code.
						<br />
						Please, check your email
					</p>
				</div>
				<VerificationInput
					inputProps={{ inputMode: 'numeric' }}
					placeholder='0'
					validChars='0-9'
					onComplete={handleVerify}
					classNames={{
						container: 'mx-auto h-12 gap-4 w-fit sm:gap-1',
						character:
							'bg-white border-none h-12 w-12 rounded-lg text-base font-medium text-primary/40 flex items-center justify-center',
						characterFilled: '!text-primary',
					}}
				/>
			</div>
		</div>
	)
}

export default VerifyEmailModal
