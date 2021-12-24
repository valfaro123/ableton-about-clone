import React from 'react'
import logo from '../../images/svg/logo.svg';

export default function Navbar() {
    return (
        <div className='w-full '>
            <div className='flex pb-1 md:justify-between border-b-2'>
                <div className='flex ml-10'>
                    <img src={logo}/>
                    <div className='mt-5 mx-8 lg:hidden'>
                        <span>Menu </span>
                    </div>
                    <ul className='hidden lg:flex mt-5 mx-8 text-xl space-x-9 font-semibold'>
                        <li>Live</li>
                        <li>Push</li>
                        <li>Link</li>
                        <li>Shop</li>
                        <li>Packs</li>
                        <li>Help</li>
                        <li className='text-theme'>More+</li>
                    </ul>
                </div>
                <div className='hidden lg:flex mt-5 mr-7 text-lg space-x-10'>
                    <a className='text-selected-text font-semibold'>Try live for free</a>
                    <a className='text-sm font-semibold mt-1' >Log in or register</a>
                </div>
            </div>
            <div className='font-semibold ml-10 mt-5 text-xs lg:text-base flex space-x-5'>
                <a className='text-theme'>About</a>
                <a>Jobs</a>
                <a>Apprenticeship</a>
            </div>
        </div>
    )
}
