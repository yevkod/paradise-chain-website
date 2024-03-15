import React from 'react';
import img_1 from '../../assets/imgs/footer-1.png';
import img_2 from '../../assets/imgs/footer-2.png';
import img_3 from '../../assets/imgs/footer-3.png';

export const FooterView = () => {
    return (
        <div className='bg-black pb-[90px]'>
            <div className='flex flex-col bg-gray-700 max-w-[90rem] gap-5 mx-auto rounded-2xl p-7'>
                <div className='flex justify-between items-center'>
                    <ul className='flex gap-5 text-white'>
                        <li>Features</li>
                        <li>Tokenomics</li>
                        <li>Publishing</li>
                        <li>Team</li>
                        <li>FAQs</li>
                    </ul>
                    <div className='flex gap-5'>
                        <div>
                            <img src={img_1} alt='' />
                        </div>
                        <div>
                            <img src={img_2} alt='' />
                        </div>
                        <div>
                            <img src={img_3} alt='' />
                        </div>
                    </div>
                </div>
                <div className='bg-gray-300 h-[0.5px]'></div>
                <div className='flex justify-between items-center text-white'>
                    <div className='flex gap-5'>
                        <div>
                            @2024
                        </div>
                        <div>
                            Gauer 2023
                        </div>
                    </div>
                    <ul className='flex gap-5'>
                        <li>Cookies</li>
                        <li>Terms & Privacy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
