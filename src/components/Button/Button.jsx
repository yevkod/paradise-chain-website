import React from 'react';
import logo from '../../assets/imgs/logo.png';

export const Button = ({ text, className = '', ...rest }) => {
    return (
        <div>
            <button className={`bg-white rounded-2xl outline-none flex items-center hover:bg-gray-200 active:bg-gray-300 hover:scale-105 transition-all gap-3 px-7 py-4 ${className}`} {...rest}>
                <div className='w-4'>
                    <img src={logo} alt='logo' />
                </div>
                <span className='text-black font-semibold'>{text}</span>
            </button>
        </div>
    )
}
