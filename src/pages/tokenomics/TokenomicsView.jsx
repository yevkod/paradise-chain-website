import React, { useState } from 'react';
import logo from '../../assets/imgs/logo.png';
import { statisticsArray, tokenomicsArray } from './TokenomicsArray';
import DonutChart from 'react-donut-chart';
import { formatNumber } from '../../utils/numbers';

export const TokenomicsView = () => {
    const [offset, setOffset] = useState(0);

    return (
        <div className='bg-black pt-[90px] relative  pb-[90px] px-5'>
            <div className='max-w-[90rem] mx-auto relative text-white tokenomics-shadow'>
                <div className='flex items-center gap-5'>
                    <div className='z-50'>
                        <img src={logo} alt='logo' className='z-50' />
                    </div>
                    <div className='[font-size:_clamp(2em,4vw,48px)] z-50'>
                        $PARCHA Tokenomics
                    </div>
                </div>
                <div className='grid text-white grid-cols-1 z-50 md:grid-cols-2 lg:grid-cols-3 max-w-[645px] pt-10 text-left'>
                    {tokenomicsArray.map((item, i) => (
                        <div className='flex flex-col'>
                            <div className='text-xl font-semibold z-50'>
                                {item.title}
                            </div>
                            <div className='text-sm uppercase z-50'>
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='bg-gray-700 rounded-lg bg-opacity-30 mt-16 text-left'>
                    <div className='grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-16'>
                        <div className='col-span-2 grid grid-cols-2'>
                            {statisticsArray.map((item, i) => (
                                <div key={i} className='flex gap-3'>
                                    <div style={{ backgroundColor: item.color }} className='w-2 h-2'></div>
                                    <div className='flex flex-col'>
                                        <div className='font-semibold leading-[8px] z-50'>
                                            {item.label}
                                        </div>
                                        <div className='text-sm text-gray-400 pt-3'>
                                            {formatNumber(item.value)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col-span-1 grid grid-cols-1'>
                            <DonutChart
                                data={statisticsArray}
                                colors={statisticsArray.map((item) => item.color)}
                                innerRadius={0.4}
                                outerRadius={0.85}
                                strokeColor="none"
                                width={330}
                                height={330}
                                selectedOffset={offset}
                                clickToggle={false}
                                legend={false}
                                onMouseEnter={() => setOffset(0.1)}
                                onMouseLeave={() => setOffset(0)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
