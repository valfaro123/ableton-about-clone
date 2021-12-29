import React from 'react';
import photo1 from '../../images/photo-1.jpg'
import photo2 from '../../images/photo-2.jpg'

export default function ImageCard1() {
    return (
        <div className='relative flex mt-16 overflow-hidden mb-12' >

            <img className=' h-40 my-8 mx-8' src={photo1}/>

            <div className='right-0 h-full w-8/12 absolute bg-color-block-1 -z-1 '></div>

            <img className='absolute right-8 h-2/4 mt-16' src={photo2}/>
        </div>
    )
}
