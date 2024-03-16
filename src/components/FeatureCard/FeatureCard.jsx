import React from 'react'

export const FeatureCard = ({ title, description, tags, style, ...rest }) => {
    return (
        <div className={`flex flex-col rounded-3xl p-5 text-white text-left max-w-[500px] lg:max-h-[355px] mx-auto ${rest.className}`} style={style}>
            <div className='[font-size:_clamp(2em,4vw,42px)] leading-[53px] font-medium'>
                {title}
            </div>
            <div className='text-xs text-gray-300 pt-5'>
                {description}
            </div>
            <div className='flex flex-wrap gap-3 pt-4 text-[12px]'>
                {tags.map((item, i) => (
                    <div key={i} className='bg-gray-500 p-2 rounded-md bg-opacity-50'>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}
