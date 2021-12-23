import React from 'react'
import logo from '../../images/svg/logo.svg';

export default function Navbar() {
    return (
        <div className='w-full '>
            <div className='flex  md:justify-between border-b-4'>
                <div className='flex ml-7'>
                    <img src={logo}/>
                    <div className='mt-5 mx-8 lg:hidden'>
                        <span>Menu </span>
                    </div>
                    <ul className='hidden md:flex mt-5 mx-8 text-xl space-x-8 font-bold'>
                        <li>Live</li>
                        <li>Push</li>
                        <li>Link</li>
                        <li>Shop</li>
                        <li>Packs</li>
                        <li>Help</li>
                        <li>More+</li>
                    </ul>
                </div>
                <div className='hidden lg:flex mt-5 mr-5 text-lg space-x-8'>
                    <a>Try live for free</a>
                    <a className='text-sm mt-1' >Log in or register</a>
                </div>
            </div>
            <div className='font-bold ml-5 mt-7 text-xs flex space-x-5'>
                <a>About</a>
                <a>Jobs</a>
                <a>Apprenticeship</a>
            </div>
        </div>
    )
}
