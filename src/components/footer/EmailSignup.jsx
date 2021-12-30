import React from 'react'

export default function EmailSignup() {
    return (
        <div className='lg:w-2/5 '>
            <span className='font-semibold text-sm'>Sign up to our newsletter</span>
            <p className='text-sm leading-6 mb-6'>Enter your email addresss to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
            <input className='bg-gray-200 p-2' placeholder='Email Address'/>
            <button className='bg-selected-text text-white p-2'>Sign Up</button>
        </div>
    )
}
