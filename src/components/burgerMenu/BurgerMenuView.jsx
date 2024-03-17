import React from 'react'
import { Link } from 'react-scroll'
import { Button } from '../Button/Button';

export const BurgerMenuView = ({ setMenu }) => {

    const handleMenu = () => {
        setMenu(false);
    }

    return (
        <div className='flex z-50 flex-col py-10 min-h-screen px-10 justify-center shadow-md rounded-lg'>
            <ul className='flex flex-col gap-5 text-[25px] underline'>
                <li className='hover:underline hover:scale-105 transition-all cursor-pointer'><Link to="features" smooth={true} duration={500} onClick={handleMenu}>Features</Link></li>
                <li className='hover:underline hover:scale-105 transition-all cursor-pointer'><Link to="howToBuy" smooth={true} duration={500} onClick={handleMenu}>How to buy</Link></li>
                <li className='hover:underline hover:scale-105 transition-all cursor-pointer'><Link to="tokenomics" smooth={true} duration={500} onClick={handleMenu}>Tokenomics</Link></li>
                <li className='hover:underline hover:scale-105 transition-all cursor-pointer'><Link to="publishing" smooth={true} duration={500} onClick={handleMenu}>Publishing</Link></li>
                <li className='hover:underline hover:scale-105 transition-all cursor-pointer'><Link to="team" smooth={true} duration={500} onClick={handleMenu}>Team</Link></li>
                <li className='hover:underline hover:scale-105 transition-all cursor-pointer'><Link to="faq" smooth={true} duration={500} onClick={handleMenu}>FAQs</Link></li>
            </ul>
            <div className='flex flex-col pt-8 gap-5'>
                <div>
                    <Button text='Buy now' className='w-full mt-5 text-center flex justify-center !bg-gray-400 text-white' />
                </div>
            </div>
        </div>
    )
}
