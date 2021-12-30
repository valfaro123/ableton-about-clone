import React from 'react';
import photo1 from '../../images/photo-1.jpg'
import photo2 from '../../images/photo-2.jpg'

export default function ImageCard1() {
    return (
        <div className='relative flex mt-16 overflow-hidden mb-12' >

            <img className=' w-2/5 m-8' src={photo1}/>

            <div className='right-0 h-full w-8/12 absolute bg-color-block-1 -z-1 '></div>

            <img className=' w-1/3 m-auto' src={photo2}/>
        </div>
    )
}
