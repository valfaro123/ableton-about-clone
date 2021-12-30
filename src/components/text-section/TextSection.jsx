import React from 'react'

export default function TextSection(props) {
    return (
        <div className='mx-8 md:mx-32'>
            <h2 className='font-bold mt-5 lg:text-3xl lg:leading-relaxed lg:font-semibold md:mt-16 leading-8'>{ props.title}</h2>
            <p className='my-4  text-sm lg:text-lg leading-6'>{props.body}</p>
        </div>
    )
}
