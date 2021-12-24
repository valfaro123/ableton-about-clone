import React from 'react'
import headerImg from '../../images/header.jpg'

export default function Header() {
    return (
        <div className='w-full'>
            <div className='relative mx-8 min-h-[88vh] md:mx-24 mt-8 inline-flex '>
                <img src={headerImg} className='object-cover'/>
                <div className='text-6xl text-theme font-semibold md:text-9xl absolute flex justify-center items-center w-full h-full '>Ableton
                </div>
            </div>
        </div>
    )
}
