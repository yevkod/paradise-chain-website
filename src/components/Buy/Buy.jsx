import React from 'react'
import { buyArray } from './BuyArray'
import { Button } from '../Button/Button'

export const Buy = () => {
    return (
        <div className='flex flex-col pt-5 max-w-[450px] mx-auto'>
            <div className='flex gap-3 mx-auto'>
                {buyArray.map((item) => (
                    <div className='flex hover:scale-110 transition-all'>
                        <div className='flex '>
                            <img src={item.icon} alt='' />
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col md:flex-row gap-3 pt-5'>
                <div>
                    <input className='border-2 border-gray-100 p-3 bg-transparent placeholder:text-white rounded-lg outline-none text-white' placeholder='0.00 Tether' />
                </div>
                <div>
                    <input className='border-2 border-gray-100 p-3 bg-transparent rounded-lg outline-none placeholder:text-white text-white' placeholder='0.00 Desoc' />
                </div>
            </div>
            <div className=''>
                <Button text='Buy now' className='w-full mt-5 text-center flex justify-center' />
            </div>
        </div>
    )
}
