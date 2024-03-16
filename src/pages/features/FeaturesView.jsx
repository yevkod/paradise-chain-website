import React from 'react'
import { FeatureCard } from '../../components/FeatureCard/FeatureCard'
import { customArray, customOffersArray, innovativeArray } from './FeaturesArray'
import '../../App.css';

export const FeaturesView = () => {
    return (
        <div className='bg-black pt-[50px] pb-[90px] px-5'>
            <div className='max-w-[90rem] mx-auto'>
                <div className='text-white [font-size:_clamp(2em,4vw,128px)] font-semibold'>
                    Features you’ll like
                </div>
                <div className='hover:scale-105 transition-all pt-5'>
                    {customArray.map((item, i) => (
                        <div key={i}>
                            <FeatureCard title={item.title} description={item.description} tags={item.tags} className='bg-gray-800 mobile-feature-card' style={{ transform: "translate(0, 0%) rotateZ(-0.752deg)" }}
                            />
                        </div>
                    ))}
                </div>
                <div className='hover:scale-105 transition-all pt-5 md:pt-0'>
                    {customOffersArray.map((item, i) => (
                        <div key={i}>
                            <FeatureCard title={item.title} description={item.description} tags={item.tags} className='bg-[#1E6B83] mobile-feature-card' style={{
                                transform:
                                    "translate(2.125rem, calc(-5% + 1.25rem)) rotateZ(7.435deg)",
                            }} />
                        </div>
                    ))}
                </div>
                <div className='hover:scale-105 transition-all pt-5 md:pt-0'>
                    {innovativeArray.map((item, i) => (
                        <div key={i}>
                            <FeatureCard title={item.title} description={item.description} tags={item.tags} className='bg-[#641936] mobile-feature-card' style={{
                                transform:
                                    "translate(-2.375rem, calc(-10% + 2.375rem)) rotateZ(-4.05deg)",
                            }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
