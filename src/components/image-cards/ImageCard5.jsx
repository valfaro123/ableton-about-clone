import React from 'react'
import photo8 from '../../images/photo-8.jpg'
export default function ImageCard5() {
    return (
        <div className='mx-8 my-8 md:mx-24 flex-col'>
            <img className='object-cover h-52 w-full' src={photo8}/>
            <div className='bg-color-block-4 p-10' >
                <p className='font-bold leading-8 mb-8'>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</p>
                <a href='#'className='text-selected-text font-semibold'>See latest jobs &gt; </a>
            </div>
        </div>
    )
}
