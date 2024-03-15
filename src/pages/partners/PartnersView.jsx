import React from 'react'
import { partnersArray } from './PartnersArray'
import Marquee from 'react-fast-marquee'

export const PartnersView = () => {
    return (
        <div className='flex bg-black pt-[90px] pb-[90px] w-[100vw] px-5'>
            <Marquee autoFill play>
                <div className='flex mx-auto gap-5'>
                    {partnersArray.map((item) => (
                        <div className='flex items-center gap-5 first:pl-6'>
                            <div className='flex'>
                                <img src={item.icon} alt='' />
                            </div>
                            <div className='text-white font-semibold'>
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    )
}
