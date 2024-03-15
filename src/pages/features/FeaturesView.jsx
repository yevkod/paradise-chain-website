import React from 'react'
import { FeatureCard } from '../../components/FeatureCard/FeatureCard'
import { customArray, customOffersArray, innovativeArray } from './FeaturesArray'

export const FeaturesView = () => {
    return (
        <div className='bg-black pt-[50px] pb-[90px] px-5'>
            <div className='max-w-[90rem] mx-auto'>
                <div className='text-white [font-size:_clamp(5em,4vw,78px)] font-semibold'>
                    Features you’ll like
                </div>
                <div>
                    {customArray.map((item, i) => (
                        <div key={i}>
                            <FeatureCard title={item.title} description={item.description} tags={item.tags} className='bg-gray-800' style={{ transform: "translate(0, 0%) rotateZ(-0.752deg)" }} />
                        </div>
                    ))}
                </div>
                <div>
                    {customOffersArray.map((item, i) => (
                        <div key={i}>
                            <FeatureCard title={item.title} description={item.description} tags={item.tags} className='bg-[#1E6B83]' style={{
                                transform:
                                    "translate(2.125rem, calc(-5% + 1.25rem)) rotateZ(7.435deg)",
                            }} />
                        </div>
                    ))}
                </div>
                <div>
                    {innovativeArray.map((item, i) => (
                        <div key={i}>
                            <FeatureCard title={item.title} description={item.description} tags={item.tags} className='bg-[#641936]' style={{
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
