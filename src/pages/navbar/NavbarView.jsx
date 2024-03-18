import React from 'react';
import logo from '../../assets/imgs/logo.png';
import burger from '../../assets/imgs/burgerIcon.svg';
import { Button } from '../../components/Button/Button';
import { Link } from "react-scroll";

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
                <li className='hover:underline hover:scale-105 transition-all cursor-pointer'><Link to="features" smooth={true} duration={500} onClick={handleMenu}>Features</Link></li>
                <li className='hover:underline hover:scale-105 transition-all'><Link to="howToBuy" smooth={true} duration={500} onClick={handleMenu}>How to buy</Link></li>
                <li className='hover:underline hover:scale-105 transition-all'><Link to="tokenomics" smooth={true} duration={500} onClick={handleMenu}>Tokenomics</Link></li>
                <li className='hover:underline hover:scale-105 transition-all'><Link to="Publishing" smooth={true} duration={500} onClick={handleMenu}>Publishing</Link></li>
                <li className='hover:underline hover:scale-105 transition-all'><Link to="team" smooth={true} duration={500} onClick={handleMenu}>Team</Link></li>
                <li className='hover:underline hover:scale-105 transition-all'><Link to="FAQs" smooth={true} duration={500} onClick={handleMenu}>FAQs</Link></li>
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
