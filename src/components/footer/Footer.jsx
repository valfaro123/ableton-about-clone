import React from 'react'
import logo from '../../images/svg/logo.svg';

export default function Footer() {
    return (
        <div className='w-full border-t-2'>
            <div className='mx-8 py-8 '>
                <h2 className='font-bold text-4xl mb-10'>Ableton</h2>
                <span className='font-semibold text-sm'>Sign up to our newsletter</span>
                <p className='text-sm leading-6 mb-6'>Enter your email addresss to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                <input className='bg-gray-200 p-2' placeholder='Email Address'/>
                <button className='bg-selected-text text-white p-2'>Sign Up</button>

                <ul className='mb-2 mt-8'>
                    <a href='' className='list-item'>Register Live or Push &gt; </a>
                    <a className='list-item'>About Ableton &gt; </a>
                    <a className='list-item'>Jobs &gt; </a>
                </ul>
                {/* socials */}
                <ul className='mb-8'>
                    <a>facebook</a>
                    <a>twitter</a>
                    <a>youtube</a>
                    <a>ig</a>
                </ul>

                <h3 className='list-title'>Education</h3>
                <ul className='list'>
                    <a className='list-item'>Offers for students and teachers &gt; </a>
                    <a className='list-item'>Ableton for the Classroom &gt; </a>
                    <a className='list-item'>Ableton for Colleges and Universities &gt; </a>
                </ul>

                <h3 className='list-title'>Community</h3>
                <ul className='list'>
                    <a className='list-item'>Find Ableton User Groups &gt; </a>
                    <a className='list-item'>Find Certefied Training &gt; </a>
                    <a className='list-item'>Become a Certified Trainer &gt; </a>
                </ul>
                <h3 className='list-title'>Distributors</h3>
                <ul className='list'>
                    <a className='list-item'>Find Distributors &gt; </a>
                    <a className='list-item'>Try Push in-store &gt; </a>
                </ul>
                
                <img className='h-12 inline'  src={logo}/>
                <span className='ml-6 text-xs font-semibold'>Made in Berlin</span>
                
            </div>
            
            
        </div>
    )
}
