import React from 'react'
import photo6 from '../../images/photo-6-a.jpg'
import photo7 from '../../images/photo-7.jpg'
export default function ImageCard4() {
    return (
        <div className='relative flex mt-8 overflow-hidden mb-12 ' >

            <img className=' w-1/3 my-16 mx-8' src={photo6}/>

            <div className='mx-16 h-full w-2/3 absolute bg-color-block-3 -z-1 '></div>

            <img className='absolute right-0 h-3/5 bottom-12' src={photo7}/>
        </div>
    )
}
