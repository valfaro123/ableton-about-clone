import React from 'react'
import photo6 from '../../images/photo-6-a.jpg'
import photo7 from '../../images/photo-7.jpg'
export default function ImageCard4() {
    return (
        <div className='relative flex mt-8 h-3/4 overflow-hidden mb-12' >

            <img className='object-cover h-2/5 m-auto w-1/3' src={photo6}/>

            <div className='left-0 right-0 mx-auto h-full w-2/3 absolute bg-color-block-3 -z-1 '></div>

            <img className=' mx-auto my-16 w-2/5' src={photo7}/>
        </div>
    )
}
