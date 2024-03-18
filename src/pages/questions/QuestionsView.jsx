import React from 'react'
import { Button } from '../../components/Button/Button'

export const QuestionsView = () => {
    return (
        <div className='bg-black pt-[90px] pb-[90px] px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-l from-pink-custom to-yellow-custom p-10 rounded-xl max-w-[90rem] mx-auto' id='questions'>
                <div className='flex flex-col text-left'>
                    <div className='text-[25px] lg:[font-size:_clamp(3em,4vw,16px)] text-white font-bold leading-[49px]'>
                        Have any questions?<br></br>
                        Drop us a line
                    </div>
                    <div className='pt-5 text-gray-600'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>
                <div className='flex flex-col w-full mx-auto gap-5 pt-5 lg:pt-0'>
                    <div><input className='w-full outline-none rounded-xl p-3 px-4 bg-gray-700 bg-opacity-30 text-white placeholder:text-white' placeholder='Name' /></div>
                    <div><input className='w-full outline-none rounded-xl p-3 px-4 bg-gray-700 bg-opacity-30 text-white placeholder:text-white' placeholder='Email' /></div>
                    <div><input className='w-full outline-none rounded-xl p-3 px-4 bg-gray-700 bg-opacity-30 text-white placeholder:text-white' placeholder='Phone' /></div>
                    <div>
                        <textarea className='w-full outline-none rounded-xl p-3 px-4 bg-gray-700 bg-opacity-30 text-white placeholder:text-white' placeholder='Your message' ></textarea>
                        <div className='pt-5'>
                            <Button text='Submit form' className='w-full justify-center' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
