import React from 'react';
import logo from '../../assets/imgs/logo.png';
import burger from '../../assets/imgs/burgerIcon.svg';
import { Button } from '../../components/Button/Button';

export const NavbarView = ({ menu, setMenu }) => {

    const handleMenu = () => {
        setMenu(!menu);
    }

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
            <ul className='hidden lg:flex gap-5 text-white cursor-pointer '>
                <li className='hover:underline hover:scale-105 transition-all'>Features</li>
                <li className='hover:underline hover:scale-105 transition-all'>How to buy</li>
                <li className='hover:underline hover:scale-105 transition-all'>Tokenomics</li>
                <li className='hover:underline hover:scale-105 transition-all'>Publishing</li>
                <li className='hover:underline hover:scale-105 transition-all'>Team</li>
                <li className='hover:underline hover:scale-105 transition-all'>FAQs</li>
            </ul>
            <div className='flex lg:hidden justify-end w-10 cursor-pointer' onClick={handleMenu}>
                <img src={burger} alt='burger' />
            </div>
            <div className='hidden lg:flex'>
                <Button text='Buy now' />
            </div>
        </div>
    )
}
