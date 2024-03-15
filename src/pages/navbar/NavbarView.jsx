import React from 'react';
import logo from '../../assets/imgs/logo.png';
import { Button } from '../../components/Button/Button';

export const NavbarView = () => {
    return (
        <div className='flex z-20 absolute items-center h-[75px] rounded-b-lg w-full justify-between p-5'>
            <div className='flex items-center gap-3 cursor-pointer hover:scale-105 transition-all'>
                <div className='w-[40px]'>
                    <img src={logo} alt='' />
                </div>
                <div className='font-semibold text-[24px] text-white'>
                    Paradise<span className='font-light'>Chain</span>
                </div>
            </div>
            <ul className='flex gap-5 text-white'>
                <li>Features</li>
                <li>How to buy</li>
                <li>Tokenomics</li>
                <li>Publishing</li>
                <li>Team</li>
                <li>FAQs</li>
            </ul>
            <div>
                <Button text='Buy now' />
            </div>
        </div>
    )
}
