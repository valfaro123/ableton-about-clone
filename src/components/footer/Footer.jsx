import React from 'react'
import logo from '../../images/svg/logo.svg';
import EmailSignup from './EmailSignup';
import LinkSection from './LinkSection';

export default function Footer() {
    return (
        <div className='w-full border-t-2'>
            <div className='mx-8 lg:mx-12 pt-8 lg:flex'>
                
                <EmailSignup/>
                <LinkSection/>
            </div>
            <div className='mx-8'>
                    <img className='h-12 inline'  src={logo}/>
                    <span className='ml-6 text-xs font-semibold'>Made in Berlin</span>
                </div>
            
        </div>
    )
}
