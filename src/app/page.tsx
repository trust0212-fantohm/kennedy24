'use client'

import Image from 'next/image'
import React from 'react'
import { Icon } from '@iconify/react'
import cx from 'classnames'
import DeclareLogo from '@/assets/images/DeclareLogo.png'
import HeroImage from '@/assets/images/Hero.jpg'
import M4Logo from '@/assets/images/M4Logo.png'
import ManImage from '@/assets/images/Man.jpg'
import PlaceholderImage from '@/assets/images/Placeholder.png'
import { poppins } from './fonts'

export default function Home() {
	return (
		<div>
			<section className='relative sm:space-y-8'>
				<Image src={HeroImage} alt='Hero' />
				<div className='absolute right-12 top-1/2 w-fit -translate-y-1/2 space-y-4 sm:relative sm:left-auto sm:right-auto sm:top-0 sm:mx-auto sm:translate-y-0 sm:px-5'>
					<Image
						src={DeclareLogo}
						alt='Declare Logo'
						width={528}
						height={158}
						className='sm:hidden'
					/>
					<p className='mx-auto max-w-[413px] text-center text-[1.1rem] font-medium text-primary'>
						As president, I will end the forever wars, clean up government, increase
						wealth for all, and tell Americans the truth.
					</p>
				</div>
			</section>
			<section className='container space-y-14 py-14'>
				<div className='space-y-5'>
					<h2>HEADING 2</h2>
					<h6 className={poppins.className}>subheading</h6>
				</div>
				<div className='space-y-8'>
					{Array(3)
						.fill(0)
						.map((_, i) => (
							<div
								className='relative flex gap-12 bg-gray-400 p-10 sm:gap-4 lg:flex-col'
								key={i}
							>
								{i !== 0 && (
									<div className='absolute inset-0 z-10 overflow-hidden bg-white/80'>
										{Array(2)
											.fill(0)
											.map((_, i) => (
												<div
													className={cx(
														'absolute top-1/2 flex -translate-x-1/3 -translate-y-1/2 gap-4 py-2 sm:-translate-x-1/3',
														i === 0 ? 'rotate-6 bg-red' : '-rotate-6 bg-primary'
													)}
													key={i}
												>
													{Array(20)
														.fill(0)
														.map((_, i) => (
															<p
																className={cx(
																	'whitespace-nowrap text-[1.25rem] font-medium text-white',
																	i !== 0 && 'border-l-2 border-white pl-4'
																)}
																key={i}
															>
																COMING SOON
															</p>
														))}
												</div>
											))}
									</div>
								)}
								<Image
									src={ManImage}
									alt='Man'
									className='aspect-[0.8] w-80 object-cover lg:mx-auto'
								/>
								<div className='flex flex-col gap-4 sm:gap-2'>
									<h4>Heading</h4>
									<p className='text-[1.3rem] text-primary'>
										{i == 0
											? 'Lorem ipsum dolor sit amet consectetur. Mi commodo etiam et sed feugiat sit volutpat eget. Quam cum purus enim diam enim ac. Amet sollicitudin ornare maecenas sit consequat imperdiet mattis purus nullam. Vulputate dictum sit ultrices in consequat nisl eget consectetur. '
											: 'Text here'}
									</p>
									<div className='mt-auto space-y-6'>
										<p className={cx('text-primary', poppins.className)}>Text here</p>
										<div className='flex gap-8 sm:flex-col'>
											<button className='btn-primary sm:w-full'>
												Explore Collection
											</button>
											<button className='btn-primary-outlined sm:w-full'>
												<span className='flex items-center gap-2 sm:justify-center'>
													<Icon icon='bi:share' className='text-2xl' />
													Share
												</span>
											</button>
										</div>
									</div>
								</div>
								<div className='h-fit w-full max-w-72 space-y-6 border-[3px] border-gray-500 p-8 lg:hidden'>
									<div className='flex items-center gap-2'>
										<div className='h-12 w-12 rounded-[10px] border border-gray-500' />
										<p className='text-[1.1rem] font-semibold text-primary'>Brand</p>
									</div>
									<div>
										<p className={cx('brand-title', poppins.className)}>Text</p>
										<p
											className={cx('brand-description text-primary', poppins.className)}
										>
											USD $ {(3585560).toLocaleString()}
										</p>
									</div>
									<div>
										<p className={cx('brand-title', poppins.className)}>Text</p>
										<p className={cx('brand-description text-green', poppins.className)}>
											Heading
										</p>
									</div>
									<div>
										<p className={cx('brand-title', poppins.className)}>Text</p>
										<p
											className={cx('brand-description text-primary', poppins.className)}
										>
											USD $ {(36700).toLocaleString()}
										</p>
									</div>
									<div>
										<p className={cx('brand-title', poppins.className)}>Text</p>
										<p
											className={cx('brand-description text-primary', poppins.className)}
										>
											USD $ {(3585560).toLocaleString()}
										</p>
									</div>
								</div>
							</div>
						))}
				</div>
			</section>
			<section className='container !max-w-[1266px] space-y-14 sm:py-6'>
				{Array(2)
					.fill(0)
					.map((_, i) => (
						<div
							className={cx(
								'flex gap-[30px] py-[70px] sm:flex-col sm:gap-6 sm:py-10',
								i % 2 === 1 ? 'flex-row-reverse' : ''
							)}
							key={i}
						>
							<div className='flex basis-1/2 flex-col justify-center space-y-[25px] sm:space-y-4'>
								<h2 className='text-left'>ABOUT NFT</h2>
								<p className='text-[1.25rem] text-primary'>
									Lorem ipsum dolor sit amet consectetur. Bibendum porta in faucibus et
									morbi nibh eget eu posuere. Eget nulla nec viverra sit orci nunc elit.
									Magna mauris aliquet sapien ultricies condimentum risus gravida
									elementum faucibus. Arcu faucibus diam odio diam. Elit ultricies sed
									nunc amet faucibus turpis lectus eget ultrices. Tellus in bibendum
									tincidunt in quam iaculis interdum non. Fringilla ac ornare sit
									pellentesque.
								</p>
							</div>
							<div
								className={cx(
									'flex basis-1/2 flex-col justify-center',
									i % 2 === 0 ? 'items-end' : ''
								)}
							>
								<Image
									src={PlaceholderImage}
									alt='Placeholder'
									width={350}
									height={350}
									className='sm:w-full'
								/>
							</div>
						</div>
					))}
			</section>
			<section className='container py-14 sm:py-6'>
				<div className='mx-auto flex w-fit items-center gap-[18px]'>
					<p className='text-[1.375rem] font-light text-primary sm:text-[1rem]'>
						Powered by
					</p>
					<div className='flex items-center gap-1.5'>
						<Image
							src={M4Logo}
							alt='M4 Logo'
							width={50}
							height={50}
							className='sm:h-8 sm:w-8'
						/>
						<p className='text-[1.375rem] font-medium text-[#252525] sm:text-[1rem]'>
							Mint4Change
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
