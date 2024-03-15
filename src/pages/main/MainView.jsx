import React from 'react'
import { MyTimer } from '../../components/Timer/Timer'
import tree_left from '../../assets/imgs/tree-left.png';
import tree_right from '../../assets/imgs/tree-right.png';
import { Buy } from '../../components/Buy/Buy';
import { Progress } from '../../components/ProgressBar/ProgressBar';

export const MainView = () => {

    const time = new Date();
    time.setDate(time.getDate() + 9);
    time.setHours(time.getHours() + 12);
    time.setSeconds(time.getSeconds() + 3);

    return (
        <div className='bg-[#5F102F] relative pt-[150px] main-shadow pb-[90px]'>
            <div className='absolute top-0 left-0 z-10'>
                <img className='max-h-[1050px]' src={tree_left} alt='' />
            </div>
            <div className='absolute top-0 right-0 z-10'>
                <img className='max-h-[1050px]' src={tree_right} alt='' />
            </div>
            <div className='flex flex-col max-w-[90rem] mx-auto z-50'>
                <div className='z-50'>
                    <MyTimer expiryTimestamp={time} />
                </div>
                <div className='pt-5 z-50'>
                    <div className='text-[40px] text-white font-bold hover:scale-105 transition-all'>
                        Unlock your vacation dream
                    </div>
                    <div className='text-white'>
                        Join our crypto presale of Paradise Chain token. Tired of waiting on <br></br> presale promises or getting dumped on? Join right now
                    </div>
                </div>
                <div className='z-50 pt-5'>
                    <Buy />
                </div>
            </div>
            <div className='pt-5'>
                <div className='flex absolute bottom-1.5 w-full mt-10 z-50'>
                    <Progress />
                </div>
            </div>
        </div>
    )
}
