import React from 'react';
import img_1 from '../../assets/imgs/footer-1.png';
import img_2 from '../../assets/imgs/footer-2.png';
import img_3 from '../../assets/imgs/footer-3.png';

export const FooterView = () => {
    return (
        <div className='bg-black pb-[90px] px-5'>
            <div className='flex flex-col bg-gray-700 max-w-[90rem] gap-5 mx-auto rounded-2xl p-7'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <ul className='flex flex-col md:flex-row gap-5 text-center md:text-left cursor-pointer text-white'>
                        <li className='hover:underline hover:scale-105 transition-all'>Features</li>
                        <li className='hover:underline hover:scale-105 transition-all'>Tokenomics</li>
                        <li className='hover:underline hover:scale-105 transition-all'>Publishing</li>
                        <li className='hover:underline hover:scale-105 transition-all'>Team</li>
                        <li className='hover:underline hover:scale-105 transition-all'>FAQs</li>
                    </ul>
                    <div className='flex gap-5 pt-5 md:pt-0'>
                        <div className='hover:underline hover:scale-105 transition-all cursor-pointer'>
                            <img src={img_1} alt='' />
                        </div>
                        <div className='hover:underline hover:scale-105 transition-all cursor-pointer'>
                            <img src={img_2} alt='' />
                        </div>
                        <div className='hover:underline hover:scale-105 transition-all cursor-pointer'>
                            <img src={img_3} alt='' />
                        </div>
                    </div>
                </div>
                <div className='bg-gray-300 h-[0.5px]'></div>
                <div className='flex flex-col md:flex-row justify-between items-center text-white'>
                    <div className='flex flex-col md:flex-row gap-1 md:gap-5 cursor-pointer'>
                        <div className='hover:underline hover:scale-105 transition-all'>
                            @2024
                        </div>
                        <div className='hover:underline hover:scale-105 transition-all'>
                            Gauer 2023
                        </div>
                    </div>
                    <ul className='flex pt-2 md:pt-0 gap-5 cursor-pointer'>
                        <li className='hover:underline hover:scale-105 transition-all'>Cookies</li>
                        <li className='hover:underline hover:scale-105 transition-all'>Terms & Privacy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
