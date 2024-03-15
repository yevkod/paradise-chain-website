import React from 'react';
import { useTimer } from 'react-timer-hook';

export const MyTimer = ({ expiryTimestamp }) => {
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '20px', color: '#FFFFFF' }}>
                <span className='bg-gray-200 bg-opacity-20 text-center p-3 rounded-lg m-1'>{days}<span className='text-gray-200 '>d</span></span>
                <span className='bg-gray-200 bg-opacity-20 text-center p-3 rounded-lg m-1'>{hours}<span className='text-gray-200 '>h</span></span>
                <span className='bg-gray-200 bg-opacity-20 text-center p-3 rounded-lg m-1'>{minutes}<span className='text-gray-200'>m</span></span>
                <span className='bg-gray-200 bg-opacity-20 text-center p-3 rounded-lg m-1'>{seconds}<span className='text-gray-200'>s</span></span>
            </div>
        </div>
    );
}