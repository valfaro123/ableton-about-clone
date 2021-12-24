import React from 'react'

export default function TextSection(props) {
    return (
        <div className='mx-8 md:mx-48'>
            <h2 className='font-bold mt-5 md:mt-16 leading-8'>{ props.title}</h2>
            <p className='my-4  text-sm leading-6'>{props.body}</p>
        </div>
    )
}
